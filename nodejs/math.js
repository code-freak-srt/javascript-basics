var square = function(number) {
    console.log(number * number);
}

var cube = function(number) {
    console.log(number * number * number);
}

module.exports.square = square;
module.exports.cube = cube;