import {iniciarOferta} from './oferta.js';

// Una sola lectura del archivo público. Los cambios de día se calculan localmente.
export async function cargarOferta(fetcher = globalThis.fetch) {
  const control = new AbortController();
  const temporizador = setTimeout(() => control.abort(), 2500);
  try {
    const respuesta = await fetcher(new URL('./oferta.json', import.meta.url), {
      credentials: 'omit', redirect: 'error', signal: control.signal,
    });
    if (!respuesta.ok || !respuesta.headers.get('content-type')?.includes('application/json') || !respuesta.body) return null;
    const lector = respuesta.body.getReader(), partes = [];
    let total = 0;
    try {
      for (;;) {
        const {value, done} = await lector.read();
        if (done) break;
        total += value.byteLength;
        if (total > 4000) { await lector.cancel(); return null; }
        partes.push(value);
      }
    } finally { lector.releaseLock(); }
    const bytes = new Uint8Array(total);
    let posicion = 0;
    for (const parte of partes) { bytes.set(parte, posicion); posicion += parte.byteLength; }
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch { return null; }
  finally { clearTimeout(temporizador); }
}
if (typeof document !== 'undefined') void cargarOferta().then(datos => iniciarOferta(datos));
