const http = require('http');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();

app.on('request', (_, response) => {
  const responseText = 'Hello Holberton School!';
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Content-Length', responseText.length);
  response.statusCode = 200;
  response.write(Buffer.from(responseText));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
