console.log("Hello world");
// setTimeout(function() { console.log("5 seconds gone") }, 5000);

// functions
var displayMessage = function() {
    console.log("Display");

}
displayMessage();

var calculateSquare = function(number) {
    return number * number
}
console.log(calculateSquare(5));

const { cube } = require('./math');
// modules
var math = require('./math'); //importing modules from math 

math.square(10);
math.cube(5);

// event emitters
var events = require('events'); //importing event package

var emitter = new events.EventEmitter(); //constructor

emitter.on('publishVideo', function(message) { console.log(message); })
emitter.emit('publishVideo', "Video uploaded");

// read and write files

// synchronous

var fs = require('fs'); // importing package
var r = fs.readFileSync('demo.txt', 'utf8');

console.log(r);

fs.writeFileSync('demo.txt', 'This is some more text');

// asynchronous
fs.readFile('demo.txt', 'utf8', function(err, data) {
    console.log(data);
});
console.log("hey there");



// deleting a file
// fs.unlink('demo.txt', function() {
//     console.log("file deleted");
// })

// fs.mkdirSync('new');
// fs.rmdirSync('new');