const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(9100, () => {
  console.log('Server running at http://localhost:9100/');
});
