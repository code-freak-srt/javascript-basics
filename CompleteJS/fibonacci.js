function fibonacciGenerator(n) {
    var numbers = [];

    if (n === 1) {
        numbers = [0];
    } else if (n === 2) {
        numbers = [0, 1];
    } else {
        numbers = [0, 1];
        for (var i = 2; i < n; i++) {
            numbers.push(numbers[numbers.length - 2] + numbers[numbers.length - 1]);
        }
    }
    return numbers;
}

output = fibonacciGenerator(20);

console.log(output);