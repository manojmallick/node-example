var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World new!!\n'); // this will fail the build with semi-colons
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
