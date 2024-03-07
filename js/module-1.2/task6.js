function sumNumbers(number1, number2) {
    const result = number1 + number2;
    return result
};
const a = Number(prompt('enter number1'));
console.log(typeof a);
const b = Number(prompt('enter number2'));
const result = sumNumbers(a, b);
console.log(result);