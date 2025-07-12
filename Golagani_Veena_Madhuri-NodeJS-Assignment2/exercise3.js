const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  const routes = {
    '/home': 'home.html',
    '/contact': 'contact.html',
    '/about': 'about.html'
  };

  const file = routes[req.url];

  if (file) {
    fs.readFile(path.join(__dirname, 'lib', file), (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        return res.end('Error loading file');
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(80, () => {
  console.log('Exercise 3 server running on http://localhost/');
});
