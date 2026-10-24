var http = require('http');
var fs = require('fs');

var indexHtml = fs.readFileSync(__dirname + '/index.html', 'utf8');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(indexHtml);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
