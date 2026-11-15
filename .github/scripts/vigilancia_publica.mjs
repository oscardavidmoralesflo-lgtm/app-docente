// R-4: archivo autónomo para el repositorio PÚBLICO de publicación.
// Derivado del control de release de stoa@82461fe:scripts/vigilancia.mjs.
// Nunca importar código privado, descargar dependencias ni leer archivos de Auth.
// Contratos locales: manifiestos del publicador; stoa-pagos/health; planes públicos.
// Issues: https://docs.github.com/en/rest/issues/issues?apiVersion=2022-11-28
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export const REPO_PUBLICO = 'oscardavidmoralesflo-lgtm/app-docente';
export const REPO_FUENTE = 'oscardavidmoralesflo-lgtm/stoa';
export const SITIO = 'https://magisteriostoa.lat';
export const SUPABASE = 'https://ypgbhtlnwpyjvxboowrt.supabase.co';
export const PUBLICACION = `https://raw.githubusercontent.com/${REPO_PUBLICO}/main/stoa-publicacion.json`;
// Clave PUBLICABLE, igual a la del cliente. No es una credencial privilegiada.
export const CLAVE_PUBLICABLE = 'sb_publishable_beq7nGeZEKawjHQZ0oWbdA_7A665rWZ';
export const URL_SALUD = `${SUPABASE}/functions/v1/stoa-pagos/health`;
export const URL_PLANES = `${SUPABASE}/rest/v1/planes?select=id,precio_cop&activo=eq.true`;
export const MARCA = '<!-- stoa:vigilancia:publica:v1 -->';
const TITULO = 'Incidente · Vigilancia de Stoa';
const API = 'https://api.github.com';
const PRECIO = 199900;
const SHA = /^[a-f0-9]{40}$/;
const SHA256 = /^[a-f0-9]{64}$/;
const HASH = bytes => createHash('sha256').update(bytes).digest('hex');
const BUNDLE = /^assets\/app-[A-Za-z0-9_-]{6,80}\.js$/;
const JSON_MAX = 512 * 1024, HTML_MAX = 512 * 1024, BUNDLE_MAX = 2 * 1024 * 1024;
const ISSUE_MAX = 2 * 1024 * 1024, PAGINAS_MAX = 10, ESPERA_MS = 12000;
const URLS_GET = new Set([`${SITIO}/`, `${SITIO}/bienvenida/`, `${SITIO}/stoa-release.json`, PUBLICACION, URL_SALUD, URL_PLANES]);

// Los detalles proceden exclusivamente de constantes propias y estados HTTP.
// Ningún error original, cuerpo, header o URL recibida se vuelca a logs/issues.
class FalloVigilancia extends Error {}
function exigir(condicion, mensaje) { if (!condicion) throw new FalloVigilancia(mensaje); }

export function habilitada(env) {
  return env.GITHUB_ACTIONS === 'true' && env.GITHUB_REPOSITORY === REPO_PUBLICO
    && env.STOA_REPOSITORIO_PUBLICO === 'true' && env.GITHUB_REF === 'refs/heads/main'
    && env.GITHUB_WORKFLOW_REF === `${REPO_PUBLICO}/.github/workflows/vigilancia.yml@refs/heads/main`
    && ['schedule', 'workflow_dispatch'].includes(env.GITHUB_EVENT_NAME)
    && env.STOA_VIGILANCIA_HABILITADA === 'true';
}

/** Allowlist exacta también para las rutas autenticadas. No seguir Location,
 * Link ni URL de respuesta; ni siquiera hacia otro endpoint del mismo servicio. */
function permitir(url, metodo, headers) {
  const publico = metodo === 'GET' && (URLS_GET.has(url)
    || (url.startsWith(`${SITIO}/`) && BUNDLE.test(url.slice(SITIO.length + 1))));
  const issues = [REPO_PUBLICO, REPO_FUENTE].some(repo => {
    const base = `${API}/repos/${repo}/issues`;
    if (metodo === 'POST') return url === base;
    if (metodo === 'PATCH') return url.startsWith(base + '/') && /^[1-9]\d{0,14}$/.test(url.slice(base.length + 1));
    return metodo === 'GET' && Array.from({ length: PAGINAS_MAX }, (_, i) => `${base}?state=open&per_page=100&page=${i + 1}`).includes(url);
  });
  exigir(publico || issues || (url === `${API}/user` && metodo === 'GET'), 'Solicitud fuera de la allowlist');
  const h = new Headers(headers);
  exigir(!h.has('cookie'), 'Cookies no permitidas');
  exigir(!h.has('authorization') || (!publico && (issues || url === `${API}/user`)), 'Token fuera de la API de Issues');
  exigir(!h.has('apikey') || url === URL_PLANES, 'Clave publicable fuera de planes');
}

async function solicitar(fetcher, url, { metodo = 'GET', headers, body, codigo = 200, max = JSON_MAX, tipo } = {}) {
  permitir(url, metodo, headers);
  const controlador = new AbortController();
  let lector, temporizador;
  const plazo = new Promise((_, rechazar) => {
    temporizador = setTimeout(() => {
      controlador.abort();
      rechazar(new FalloVigilancia('Sin respuesta completa dentro del tiempo de espera'));
    }, ESPERA_MS);
  });
  const operacion = async () => {
    let respuesta;
    try {
      respuesta = await fetcher(url, { method: metodo, headers, body, redirect: 'manual',
        cache: 'no-store', signal: controlador.signal });
    } catch { throw new FalloVigilancia('Sin respuesta de red dentro del tiempo de espera'); }
    exigir(!controlador.signal.aborted, 'Sin respuesta completa dentro del tiempo de espera');
    if (respuesta.status !== codigo || (tipo && !tipo.test(respuesta.headers.get('content-type') ?? ''))) {
      void respuesta.body?.cancel().catch(() => {});
      exigir(respuesta.status === codigo, `HTTP ${Number.isInteger(respuesta.status) ? respuesta.status : 'inesperado'}`);
      throw new FalloVigilancia('Tipo de contenido inesperado');
    }
    exigir(respuesta.body, 'Respuesta vacía');
    lector = respuesta.body.getReader();
    const bloques = [];
    let total = 0;
    try {
      for (;;) {
        const { done, value } = await lector.read();
        exigir(!controlador.signal.aborted, 'Sin respuesta completa dentro del tiempo de espera');
        if (done) break;
        total += value.byteLength;
        exigir(total <= max, 'Respuesta excede el límite de tamaño');
        bloques.push(Buffer.from(value));
      }
    } catch (error) {
      void lector.cancel().catch(() => {});
      if (error instanceof FalloVigilancia) throw error;
      throw new FalloVigilancia('Respuesta incompleta o fuera de tiempo');
    } finally { lector.releaseLock(); }
    return Buffer.concat(bloques, total);
  };
  try { return await Promise.race([operacion(), plazo]); }
  finally {
    clearTimeout(temporizador);
    if (controlador.signal.aborted && lector) void lector.cancel().catch(() => {});
  }
}

function json(bytes) {
  try { return JSON.parse(bytes.toString('utf8')); }
  catch { throw new FalloVigilancia('JSON inválido'); }
}
async function comprobar(nombre, operacion) {
  try { return { nombre, ok: true, valor: await operacion() }; }
  catch (error) { return { nombre, ok: false, detalle: error instanceof FalloVigilancia ? error.message : 'Error inesperado de comprobación' }; }
}
function verificarArchivo(manifiesto, ruta, bytes) {
  const entradas = manifiesto.archivos.filter(a => a?.ruta === ruta);
  exigir(entradas.length === 1, 'El manifiesto carece de un archivo requerido o lo duplica');
  exigir(entradas[0].bytes === bytes.length && entradas[0].sha256 === HASH(bytes), 'Los bytes servidos no coinciden con el manifiesto');
}

async function comprobarRelease(fetcher, html) {
  const publicacion = json(await solicitar(fetcher, PUBLICACION));
  exigir(publicacion?.formato === 1 && typeof publicacion.fuente === 'string' && SHA.test(publicacion.fuente)
    && typeof publicacion.manifiestoSha256 === 'string' && SHA256.test(publicacion.manifiestoSha256), 'La evidencia de publicación es inválida');
  const manifiestoBytes = await solicitar(fetcher, `${SITIO}/stoa-release.json`);
  exigir(HASH(manifiestoBytes) === publicacion.manifiestoSha256, 'El manifiesto servido difiere de la publicación esperada');
  const manifiesto = json(manifiestoBytes);
  exigir(manifiesto?.formato === 1 && manifiesto.tipo === 'app' && manifiesto.fuente?.repositorio === REPO_FUENTE
    && manifiesto.fuente.sha === publicacion.fuente && Array.isArray(manifiesto.archivos), 'La procedencia del manifiesto es inválida');
  verificarArchivo(manifiesto, 'index.html', html);
  const scripts = [...html.toString('utf8').matchAll(/<script\b[^>]*?\ssrc\s*=\s*(["'])([^"']+)\1[^>]*>/gi)];
  const entradas = scripts.map(m => m[2].replace(/^(?:\.\/|\/)/, '')).filter(ruta => BUNDLE.test(ruta));
  exigir(entradas.length === 1, 'El HTML no carga una entrada de la app identificable');
  const [entrada] = entradas;
  const [bundle, landing] = await Promise.all([
    solicitar(fetcher, `${SITIO}/${entrada}`, { max: BUNDLE_MAX, tipo: /^(?:text|application)\/(?:java|ecma)script\b/i }),
    solicitar(fetcher, `${SITIO}/bienvenida/`, { max: HTML_MAX, tipo: /^text\/html\b/i }),
  ]);
  verificarArchivo(manifiesto, entrada, bundle);
  verificarArchivo(manifiesto, 'bienvenida/index.html', landing);
}

export async function verificar({ fetcher }) {
  exigir(typeof fetcher === 'function', 'Falta el transporte de comprobación');
  const [sitio, edge, precio] = await Promise.all([
    comprobar('Sitio', async () => {
      const bytes = await solicitar(fetcher, `${SITIO}/`, { max: HTML_MAX, tipo: /^text\/html\b/i });
      exigir(bytes.length > 0, 'HTML vacío'); return bytes;
    }),
    comprobar('Edge de pagos', async () => {
      const salud = json(await solicitar(fetcher, URL_SALUD));
      exigir(salud?.listo === true && salud.entorno === 'prod', 'Se esperaba listo=true y entorno=prod');
    }),
    comprobar('Precio Premium', async () => {
      const planes = json(await solicitar(fetcher, URL_PLANES, { headers: { apikey: CLAVE_PUBLICABLE } }));
      exigir(Array.isArray(planes), 'La consulta de planes no devolvió una lista');
      const premium = planes.filter(p => p?.id === 'premium');
      exigir(premium.length === 1 && premium[0].precio_cop === PRECIO, 'Se esperaba un único plan Premium activo a 199.900 COP');
    }),
  ]);
  const release = sitio.ok ? await comprobar('Release', () => comprobarRelease(fetcher, sitio.valor))
    : { nombre: 'Release', ok: false, detalle: 'No comprobado por fallo del sitio' };
  return [sitio, release, edge, precio].map(({ nombre, ok, detalle }) => ({ nombre, ok, ...(detalle ? { detalle } : {}) }));
}

function destinoIssues(env) {
  exigir(typeof env.GITHUB_TOKEN === 'string' && /^[A-Za-z0-9_-]{12,255}$/.test(env.GITHUB_TOKEN), 'Falta el token efímero de GitHub');
  if (env.STOA_ISSUES_TOKEN == null || env.STOA_ISSUES_TOKEN === '') return { repo: REPO_PUBLICO, token: env.GITHUB_TOKEN };
  // El prefijo descarta PAT clásicos; Halley debe limitar el fine-grained a
  // Issues read/write de stoa. Este script no puede certificar su configuración.
  exigir(typeof env.STOA_ISSUES_TOKEN === 'string' && /^github_pat_[A-Za-z0-9_]{12,255}$/.test(env.STOA_ISSUES_TOKEN), 'El token opcional debe ser fine-grained de Issues');
  return { repo: REPO_FUENTE, token: env.STOA_ISSUES_TOKEN };
}

async function registrarIncidente(fetcher, destino, resultados, ahora, ejecucion) {
  const base = `${API}/repos/${destino.repo}/issues`;
  const headers = { Authorization: `Bearer ${destino.token}`, Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28', 'Content-Type': 'application/json' };
  let actorId = null;
  if (destino.repo === REPO_FUENTE) {
    // Un PAT firma como persona, no como github-actions[bot]. Se identifica por
    // ID autenticado; así no modifica issues ajenos que copien nuestro marcador.
    const actor = json(await solicitar(fetcher, `${API}/user`, { headers }));
    exigir(Number.isSafeInteger(actor?.id) && actor.id > 0, 'No se pudo identificar al autor del incidente privado');
    actorId = actor.id;
  }
  const encontrados = [];
  for (let pagina = 1; pagina <= PAGINAS_MAX; pagina++) {
    const issues = json(await solicitar(fetcher, `${base}?state=open&per_page=100&page=${pagina}`, { headers, max: ISSUE_MAX }));
    exigir(Array.isArray(issues) && issues.length <= 100, 'GitHub no devolvió una página de issues válida');
    encontrados.push(...issues.filter(i => i?.state === 'open' && !i.pull_request && i.title === TITULO
      && (actorId == null ? i.user?.login === 'github-actions[bot]' : i.user?.id === actorId)
      && typeof i.body === 'string' && i.body.startsWith(`${MARCA}\n`)
      && Number.isSafeInteger(i.number) && i.number > 0 && i.number < 1e15));
    if (issues.length < 100) break;
    exigir(pagina < PAGINAS_MAX, 'Paginación de issues incompleta; no se crea otro incidente');
  }
  exigir(encontrados.length <= 1, 'Hay incidentes duplicados; requiere revisión del dueño');
  const abierto = encontrados[0], fallos = resultados.filter(r => !r.ok);
  if (!abierto && !fallos.length) return 'sin incidente';
  const enlace = /^\d{1,25}$/.test(ejecucion ?? '') ? `\nEjecución: https://github.com/${REPO_PUBLICO}/actions/runs/${ejecucion}\n` : '';
  const detalle = resultados.map(r => `- ${r.nombre}: ${r.ok ? 'OK' : r.detalle}`).join('\n');
  const cuerpo = `${MARCA}\n\n${fallos.length ? 'Incidente activo' : 'Servicio recuperado'} · ${ahora.toISOString()}\n${enlace}\n${detalle}\n`;
  exigir(Buffer.byteLength(cuerpo) <= 4096, 'Resumen del incidente demasiado largo');
  if (abierto) {
    const cambio = fallos.length ? { body: cuerpo } : { body: cuerpo, state: 'closed', state_reason: 'completed' };
    await solicitar(fetcher, `${base}/${abierto.number}`, { metodo: 'PATCH', headers, body: JSON.stringify(cambio) });
    return fallos.length ? 'incidente actualizado' : 'incidente cerrado por recuperación';
  }
  await solicitar(fetcher, base, { metodo: 'POST', headers,
    body: JSON.stringify({ title: TITULO, body: cuerpo }), codigo: 201 });
  return 'incidente abierto';
}

export async function vigilar({ env, fetcher = globalThis.fetch, ahora = new Date(), registrar = console.log }) {
  if (!habilitada(env)) return { omitida: true };
  const destino = destinoIssues(env);
  exigir(ahora instanceof Date && Number.isFinite(ahora.getTime()), 'Fecha de ejecución inválida');
  const resultados = await verificar({ fetcher });
  for (const r of resultados) registrar(`${r.ok ? 'OK' : 'FALLO'} ${r.nombre}${r.detalle ? ` · ${r.detalle}` : ''}`);
  let incidente;
  try { incidente = await registrarIncidente(fetcher, destino, resultados, ahora, env.GITHUB_RUN_ID); }
  catch (error) {
    throw new FalloVigilancia(`No se pudo gestionar el incidente · ${error instanceof FalloVigilancia ? error.message : 'Error inesperado de GitHub'}`);
  }
  registrar(incidente);
  return { resultados, incidente, ok: resultados.every(r => r.ok), repoIncidente: destino.repo };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const estado = await vigilar({ env: process.env });
    if (estado.omitida) console.log('Vigilancia omitida. Requiere opt-in del dueño y workflow público app-docente/main.');
    else if (!estado.ok) process.exitCode = 1;
  } catch (error) {
    console.error(error instanceof FalloVigilancia ? error.message : 'Falló la vigilancia por un error inesperado');
    process.exitCode = 1;
  }
}
