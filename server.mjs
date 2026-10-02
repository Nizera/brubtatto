import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('./public/', import.meta.url)));
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
};

createServer((request, response) => {
  const pathname = new URL(request.url || '/', 'http://localhost').pathname;
  let relativePath;
  try {
    relativePath = decodeURIComponent(pathname).replace(/^\/+/, '') || 'index.html';
  } catch {
    response.writeHead(400).end('Bad request');
    return;
  }
  const filePath = resolve(root, relativePath);
  if (filePath !== root && !filePath.startsWith(root + sep)) {
    response.writeHead(403).end('Forbidden');
    return;
  }
  try {
    if (!statSync(filePath).isFile()) throw new Error('Not a file');
    response.writeHead(200, {
      'Content-Type': mime[extname(filePath).toLowerCase()] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'no-cache',
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
  }
}).listen(Number(process.env.PORT || 3000), '0.0.0.0', () => {
  console.log(`Bru B Tattoo site listening on 0.0.0.0:${process.env.PORT || 3000}`);
});
