const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  fs.readFile('./lib/users.txt', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error reading users.txt');
    }
    const rows = data.trim().split('\n');
    const tableRows = rows.map(row => {
      const cols = row.split('|').map(col => `<td>${col.trim()}</td>`).join('');
      return `<tr>${cols}</tr>`;
    });
    const html = `<table border="1"><tr><th>Name</th><th>Age</th><th>Gender</th><th>City</th></tr>${tableRows.join('')}</table>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  });
});
server.listen(80, () => console.log('Server running on http://localhost'));
