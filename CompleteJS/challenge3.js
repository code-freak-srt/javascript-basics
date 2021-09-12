function calculateBmi(weight, height) {
    return (weight) / (height * height);

}
var BMI = calculateBmi(74, 1.72);
console.log(BMI);