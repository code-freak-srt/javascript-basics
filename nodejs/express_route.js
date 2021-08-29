var express = require('express');
var app = express();

app.get('/home', function(request, response) {
    response.send('This is my home page');
});
app.get('/about', function(request, response) {
    response.send('This is the about us page');
});

app.get('/posts/:id', function(request, response) {
    response.send('This is post: ' + request.params.id);
});

app.listen(5000);