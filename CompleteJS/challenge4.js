i = 99;

while (i >= 1) {
    console.log(i + "bottles of beer on the wall, " + i + " bottles of beer");
    console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall");
    i--;
}

console.log("with for loops");
for (var i = 99; i >= 1; i--) {
    console.log(i + "bottles of beer on the wall, " + i + " bottles of beer");
    console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall");
}