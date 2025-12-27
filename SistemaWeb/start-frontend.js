import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

const PORT = 3000;
const distPath = path.join(process.cwd(), 'dist');

const server = createServer((req, res) => {
  let requestPath = url.parse(req.url).pathname;

  // si la ruta termina con / o no existe archivo, servir index.html
  let filePath = path.join(distPath, requestPath);
  if (requestPath === '/' || !fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) {
    filePath = path.join(distPath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
  }[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Frontend React servido en http://localhost:${PORT}`);
});
