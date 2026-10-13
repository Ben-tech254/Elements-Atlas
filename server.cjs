/* LOCAL PREVIEW ONLY
 * Node's built-in modules are enough to serve this static website.
 * Vercel serves the files directly and does not run this server.
 */
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

// Serve only these public assets, rather than exposing every project file.
const allowed = {
  '/': 'index.html',
  '/index.html': 'index.html',
  '/app.js': 'app.js',
  '/styles.css': 'styles.css'
};

http.createServer((request, response) => {
  // Ignore query parameters when deciding which file was requested.
  const pathname = new URL(request.url, 'http://localhost').pathname;
  const file = allowed[pathname];

  if (!file) {
    response.writeHead(404);
    return response.end('Not found');
  }

  // Content-Type tells the browser whether to parse HTML, CSS, or JavaScript.
  const contentType = file.endsWith('.css') ? 'text/css'
    : file.endsWith('.js') ? 'text/javascript' : 'text/html';
  response.setHeader('Content-Type', contentType + '; charset=utf-8');

  // Stream the file from this server's directory to the browser.
  fs.createReadStream(path.join(__dirname, file)).pipe(response);
}).listen(3000, '127.0.0.1', () => {
  // Loopback makes the preview available on this computer only.
  console.log('Local: http://localhost:3000');
});
