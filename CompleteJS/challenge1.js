function test() {
    var a = "3";
    var b = "8";

    var c = "";
    c = a;
    a = b;
    b = c;
    console.log("a is: " + a);
    console.log("b is: " + b);
}
// test();

var message = "Hello ";
var name = "Sushil";

console.log(message + "there" + name);