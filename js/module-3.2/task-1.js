// function sumNubers(number1, number2, number3, number4, number5) {
//   const res = number1 + number2 + number3 + number4 + number5;
//   return res;
// }
// console.log(sumNubers(2, 6, 8));
// console.log(sumNubers(4, 7, 8, 4, 6));

// псевдомасив аргументс

// function sumNumbers() {
//     console.log(arguments);
//     let total= 0;
//     for (let i = 0; i < arguments.length; i++) {
//        total += arguments[i];
//     }
//     return total;
//   }

// console.log(sumNumbers(2, 6, 8));
// console.log(sumNumbers(4, 7, 8, 4, 6));
// console.log(sumNumbers(4, 7, 8, 9, 7, 7, 6));

// перетворимо псевдомасив аргументс у звичайний масиві оскільки на псевдомасиві 
// працюють не всі методи що на масиві

// function sumNumbers() {
//    const arr = Array.from(arguments);
//     let total= 0;
//     for (let i = 0; i < arr.length; i++) {
//        total += arr[i];
//     }
//     return total;
//   }

// console.log(sumNumbers(2, 6, 8));
// console.log(sumNumbers(4, 7, 8, 4, 6));
// console.log(sumNumbers(4, 7, 8, 9, 7, 7, 6));

// Функція з використанням рест
function sumNumbers(...numbers) {
    console.log(numbers);
     let total= 0;
     for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
     }
     return total;
   }
   
console.log(sumNumbers(2, 6, 8));
console.log(sumNumbers(4, 7, 8, 4, 6));
console.log(sumNumbers(4, 7, 8, 9, 7, 7, 6));

// глянемо як працює спред
const arrNumbers = [1, 2, 3, 5];
console.log(...arrNumbers);

const copyarrNumbers = [...arrNumbers];
console.log(copyarrNumbers);

console.log(Math.max(...arrNumbers));