var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    if (request.url === '/home' | request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Welcome Home");
    } else if (request.url === '/profile') {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end("Welcome to profile");
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(3000, '127.0.0.1');