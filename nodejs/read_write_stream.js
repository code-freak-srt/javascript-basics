var http = require('http');
var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/demo.txt', 'utf8');
var chunk_count = 0;
readStream.on('data', function(d) {
    console.log(d);
    chunk_count++;
    console.log(chunk_count);
})


var writeStream = fs.createWriteStream(__dirname + '/demo.txt');
var chunk_counting = 0;
readStream.on('data', function(d) {
    writeStream.write(d);
    chunk_counting++;
    console.log(chunk_counting);
});