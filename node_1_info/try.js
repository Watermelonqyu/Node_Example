var http = require('http');
var port = process.env.PORT || 1337;
var ip = process.env.IP || '127.0.0.1';

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(port, ip);

console.log('server running: ' + ip + ':' + port);
