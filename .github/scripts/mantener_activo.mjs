// R-4. Runtime sin dependencias, rutas configurables, credenciales persistidas ni autocommits.
// Solo se ejecuta desde app-docente/main con opt-in. Importarlo no hace peticiones.
import { appendFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const REPOSITORIO = 'oscardavidmoralesflo-lgtm/app-docente';
export const WORKFLOW = '.github/workflows/mantener-activo.yml';
export const CRON_CONSULTA = '17 1,13 * * *';
export const CRON_MENSUAL = '29 2 1 * *';
export const UMBRAL_DIAS = 45;
export const CONSULTA = 'https://ypgbhtlnwpyjvxboowrt.supabase.co/rest/v1/areas?select=id&limit=1';
// Clave publicable ya incluida en el cliente; no es un secreto ni una sesión.
const PUBLICABLE = 'sb_publishable_beq7nGeZEKawjHQZ0oWbdA_7A665rWZ';
const API = `https://api.github.com/repos/${REPOSITORIO}`;
const API_WORKFLOW = `${API}/actions/workflows/mantener-activo.yml`;
const DIA = 86400000;
export const NOTA_INACTIVIDAD = 'por_confirmar: PUT enable establece el estado active, pero GitHub no documenta que reinicie el contador de 60 días. No garantiza evitar la desactivación; un cron desactivado no puede autorrecuperarse.';
const MANUAL = `Recuperación manual por el dueño: Actions → Comprobar actividad pública de Supabase → Enable workflow; después Run workflow desde main, modo consulta. CLI: gh workflow enable mantener-activo.yml --repo ${REPOSITORIO}. Comprobar después dos ejecuciones programadas en 24 h; una manual no acredita el cron. Revisar también vigilancia.yml.`;
const MENSAJES = Object.freeze({
  GUARDIA: 'Contexto no autorizado: se requiere app-docente público, main, origen GitHub oficial, opt-in y evento previsto.',
  MODO: 'Modo inválido. Usar consulta o mensual.',
  TOKEN: 'La revisión mensual requiere el token efímero del job con actions:write.',
  CONSULTA: 'No se confirmó HTTP 200 en la consulta pública. Revisar el servicio y, si está pausado, su panel; no se ha intentado reactivarlo.',
  GITHUB: 'No se completó la lectura de metadatos públicos de GitHub. Revisar Actions sin publicar respuestas del servidor.',
  DESTINO: 'Los metadatos no corresponden al repositorio público y main autorizados.',
  FECHA: 'No se confirmó una fecha de actividad válida. Revisión manual requerida.',
  WORKFLOW: 'No se confirmó la identidad o el estado del workflow previsto.',
  MANUAL: 'El workflow está desactivado manualmente. Se respeta esa decisión; el dueño debe revisarlo.',
  ENABLE: 'GitHub no confirmó HTTP 204 al intentar habilitar el workflow. Revisar permisos y estado manualmente.',
  ACTIVO: 'La lectura posterior no confirmó el workflow activo. Revisión manual requerida.',
  RESUMEN: 'No se pudo escribir el resumen de Actions. Revisar el resultado y el estado del workflow manualmente.',
  INTERNO: 'La operación no pudo completarse. Revisar configuración sin imprimir tokens ni objetos de error.',
});

class ErrorSeguro extends Error {
  constructor(codigo) { super(MENSAJES[codigo] ?? MENSAJES.INTERNO); this.codigo = Object.hasOwn(MENSAJES, codigo) ? codigo : 'INTERNO'; }
}
const exigir = (condicion, codigo) => { if (!condicion) throw new ErrorSeguro(codigo); };
const shaValido = valor => /^[a-f0-9]{40}$/.test(valor ?? '');

export function validarContexto(env, modo) {
  exigir(['consulta', 'mensual'].includes(modo), 'MODO');
  exigir(env.GITHUB_ACTIONS === 'true' && env.GITHUB_REPOSITORY === REPOSITORIO
    && env.GITHUB_REF === 'refs/heads/main' && env.STOA_RAMA_PREDETERMINADA === 'main'
    && env.GITHUB_SERVER_URL === 'https://github.com' && env.GITHUB_API_URL === 'https://api.github.com'
    && env.GITHUB_WORKFLOW_REF === `${REPOSITORIO}/${WORKFLOW}@refs/heads/main`
    && shaValido(env.GITHUB_SHA) && env.GITHUB_WORKFLOW_SHA === env.GITHUB_SHA
    && env.STOA_REPOSITORIO_VISIBILIDAD === 'public' && env.STOA_MANTENER_ACTIVO_HABILITADO === 'true', 'GUARDIA');
  const programado = env.GITHUB_EVENT_NAME === 'schedule'
    && env.STOA_EVENTO_CRON === (modo === 'consulta' ? CRON_CONSULTA : CRON_MENSUAL);
  const manual = env.GITHUB_EVENT_NAME === 'workflow_dispatch' && env.STOA_MODO_ACTIVIDAD === modo;
  exigir(programado || manual, 'GUARDIA');
  return env.GITHUB_SHA;
}

export async function consultarActividad({ env, fetchImpl, esperar = ms => new Promise(r => setTimeout(r, ms)) }) {
  validarContexto(env, 'consulta');
  let http = 0;
  for (let intento = 1; intento <= 3; intento++) {
    try {
      // HEAD ejecuta la lectura de una sola fila de catálogo, sin devolver su cuerpo.
      // https://docs.postgrest.org/en/stable/references/api/tables_views.html#get-and-head
      const respuesta = await fetchImpl(CONSULTA, {
        method: 'HEAD', headers: { apikey: PUBLICABLE }, credentials: 'omit',
        redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(10000),
      });
      http = Number.isInteger(respuesta.status) ? respuesta.status : 0;
      if (http === 200) return { modo: 'consulta', estado: 'confirmada', intentos: intento, http };
      // Reintentos acotados para transporte, cuota y errores transitorios.
      if (![408, 429].includes(http) && http < 500) break;
    } catch { http = 0; }
    if (intento < 3) await esperar(intento === 1 ? 2000 : 5000);
  }
  throw new ErrorSeguro('CONSULTA');
}

async function leerJson(fetchImpl, url, token) {
  try {
    const respuesta = await fetchImpl(url, {
      method: 'GET', credentials: 'omit', redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(10000),
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2026-03-10', Authorization: `Bearer ${token}` },
    });
    exigir(respuesta.status === 200, 'GITHUB');
    const texto = await respuesta.text();
    exigir(texto.length <= 65536, 'GITHUB');
    return JSON.parse(texto);
  } catch { throw new ErrorSeguro('GITHUB'); }
}

function fechaActividad(fecha, ahora) {
  exigir(typeof fecha === 'string' && /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\dZ$/.test(fecha), 'FECHA');
  const instante = Date.parse(fecha);
  exigir(Number.isFinite(instante) && instante >= 0 && instante <= ahora + 300000
    && new Date(instante).toISOString() === fecha.replace('Z', '.000Z'), 'FECHA');
  return instante;
}

function workflowValido(valor, codigo = 'WORKFLOW') {
  exigir(valor && Number.isSafeInteger(valor.id) && valor.id > 0 && valor.path === WORKFLOW
    && ['active', 'disabled_inactivity', 'disabled_manually'].includes(valor.state), codigo);
  return valor;
}

export async function revisarProgramacion({ env, fetchImpl, ahora = Date.now() }) {
  const sha = validarContexto(env, 'mensual');
  const token = env.GITHUB_TOKEN;
  exigir(typeof token === 'string' && token.length >= 16 && token.length <= 1024 && !/\s/.test(token), 'TOKEN');
  exigir(Number.isFinite(ahora) && ahora >= 0, 'FECHA');
  const repo = await leerJson(fetchImpl, API, token);
  exigir(repo && repo.full_name === REPOSITORIO && repo.private === false && repo.visibility === 'public'
    && repo.default_branch === 'main' && repo.fork === false && repo.archived === false && repo.disabled === false, 'DESTINO');
  const commits = await leerJson(fetchImpl, `${API}/commits?sha=main&per_page=1`, token);
  exigir(Array.isArray(commits) && commits.length === 1 && commits[0]?.sha === sha, 'DESTINO');
  // Proxy conservador, no la definición interna de «actividad» de GitHub:
  // evita tomar un commit antiguo recién publicado como 45 días sin actividad.
  const ultimaActividad = Math.max(fechaActividad(repo.pushed_at, ahora), fechaActividad(commits[0]?.commit?.committer?.date, ahora));
  const dias = Math.max(0, Math.floor((ahora - ultimaActividad) / DIA));
  if (dias < UMBRAL_DIAS) return { modo: 'mensual', estado: 'actividad_reciente', dias, enableIntentado: false };
  const workflow = workflowValido(await leerJson(fetchImpl, API_WORKFLOW, token));
  exigir(workflow.state !== 'disabled_manually', 'MANUAL');
  // No seguir URLs recibidas de GitHub ni habilitar un id suministrado por el usuario.
  let respuesta;
  try {
    respuesta = await fetchImpl(`${API_WORKFLOW}/enable`, {
      method: 'PUT', credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(10000),
      headers: { Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2026-03-10', Authorization: `Bearer ${token}` },
    });
  } catch { throw new ErrorSeguro('ENABLE'); }
  exigir(respuesta.status === 204, 'ENABLE');
  const posterior = workflowValido(await leerJson(fetchImpl, API_WORKFLOW, token), 'ACTIVO');
  exigir(posterior.id === workflow.id && posterior.state === 'active', 'ACTIVO');
  return { modo: 'mensual', estado: 'active_confirmado', dias, enableIntentado: true, reinicioPlazo60d: 'por_confirmar' };
}

export function resumenOperacion(resultado) {
  const lineas = ['## Actividad pública de Stoa', ''];
  if (resultado.modo === 'consulta') {
    lineas.push(`Consulta mínima HEAD: HTTP ${resultado.http}; intentos: ${resultado.intentos}.`,
      'Sin sesión de docente ni cuerpo de respuesta. No garantiza evitar la pausa del plan gratuito.');
  } else {
    lineas.push(`Días desde el último commit/push observado: ${resultado.dias}.`,
      resultado.enableIntentado ? 'PUT enable: HTTP 204; lectura posterior: active.' : 'Menos de 45 días: no se solicitó enable.',
      NOTA_INACTIVIDAD, '', MANUAL);
  }
  return lineas.join('\n') + '\n';
}

export async function ejecutarCli({ args, env, fetchImpl, esperar, ahora, escribir = console.log,
  escribirError = console.error, escribirResumen = async texto => {
    if (env.GITHUB_STEP_SUMMARY) await appendFile(env.GITHUB_STEP_SUMMARY, texto);
  } }) {
  try {
    exigir(args.length === 1 && ['consulta', 'mensual'].includes(args[0]), 'MODO');
    const resultado = args[0] === 'consulta'
      ? await consultarActividad({ env, fetchImpl, esperar })
      : await revisarProgramacion({ env, fetchImpl, ahora });
    const resumen = resumenOperacion(resultado);
    try { await escribirResumen(resumen); } catch { throw new ErrorSeguro('RESUMEN'); }
    escribir(resumen.trimEnd());
    return 0;
  } catch (error) {
    const seguro = error instanceof ErrorSeguro ? error : new ErrorSeguro('INTERNO');
    const mensaje = `Operación detenida (${seguro.codigo}): ${seguro.message}`;
    escribirError(mensaje);
    try { await escribirResumen(mensaje + '\n\n' + NOTA_INACTIVIDAD + '\n\n' + MANUAL + '\n'); }
    catch { escribirError(MENSAJES.RESUMEN); }
    return 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  process.exitCode = await ejecutarCli({ args: process.argv.slice(2), env: process.env, fetchImpl: globalThis.fetch });
}
