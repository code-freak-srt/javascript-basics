var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });

    var student = {
        name: 'john',
        city: 'New York'
    };
    response.end(JSON.stringify(student));
});

server.listen(3000, '127.0.0.1');