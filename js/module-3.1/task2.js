// //TODO:=========task-2=================
// Створити скрипт який поверне суму всіх чисел в масиві

// Вихідні дані:


const numbers = [2, 4, 8, 10];
// console.log(numbers[0]);

function getTotal(numbers) {
let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        total += numbers[i];
    }
    
    return total;
}
console.log(getTotal(numbers));
