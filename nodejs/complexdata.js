var express = require('express');

var app = express();
app.set('view engine', 'ejs');
app.get('/home', function(request, response) {
    response.send("this is home");

});

app.get('/posts/:id', function(request, response) {
    var blog = { post_title: 'Tech Trends', post_category: 'Tech', post_editor: ['sushil', 'ram', 'hari'] };
    response.render('blog', { 'blog_post': request.params.id, blog: blog });
});
app.listen(5000);