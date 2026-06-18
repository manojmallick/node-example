var http = require('http');
var pendoTrack = require('./pendo-track');

http.createServer(function (req, res) {
  // Track incoming HTTP request
  pendoTrack.track('HTTP Request Received', 'system', 'system', {
    method: req.method,
    url: req.url
  });

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World new!!\n'); // this will fail the build with semi-colons
}).listen(1337, '127.0.0.1', function () {
  // Track server startup
  pendoTrack.track('Server Started', 'system', 'system', {
    port: '1337',
    host: '127.0.0.1'
  });
});

console.log('Server running at http://127.0.0.1:1337/');
