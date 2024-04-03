//Знайти добуток чисел з масиву

// const array = [2, 4, 5, 65, 78, 98];

// function multiply(array) {
//     let total = 1;

//     for (const key of array) {
//         total *= key;
//     }
//     return total;
// }

// console.log(multiply(array));

// Перепишемо цю ж задачу через метод forEach

const array = [2, 4, 5, 65, 78, 98];

function multiply(arrayNumbers) {
    let total = 1;

    arrayNumbers.forEach(number => { total *= number })

    return total;
}

console.log(multiply(array));