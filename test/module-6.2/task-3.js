// Створіть клас Calculator, який буде мати наступні методи: 
// add(), subtract(), multiply(), divide().
// Кожен метод приймає два аргументи - числа, які необхідно обробити. 
// Результатом кожного методу має бути результат відповідної математичної операції.
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5


// class Calculator {
   
//     add(num1, num2) {
//         return num1 + num2;
//     }
//     substract(num1, num2) {
//         return num1 - num2;
//     }
//     multiply(num1, num2) {
//         return num1 * num2;
//     }
//     divide(num1, num2) {
//         if (num2 === 0) {
//             return 'На нуль ділити не можна';
//         }
//         return num1 / num2;
//     }
// }
// const calculator = new Calculator();
// console.log(calculator.substract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

class Calculator {
   
    add() {
        
        return Array.from(arguments).reduce((total, num) => {
            total += num; 
            return total;
        }, 0)
        
    }
    substract(num1, num2) {
        return num1 - num2;
    }
    multiply(...args) {
        return args.reduce((total, arg) => {
            total *= arg;
            return total;
        }, 1)
    }
    divide(num1, num2) {
        if (num2 === 0) {
            return 'На нуль ділити не можна';
        }
        return num1 / num2;
    }
}

const calculator = new Calculator();
console.log(calculator.add(5, 6, 7, 10, 56))
console.log(calculator.multiply(5, 6, 7, 10, 56))
