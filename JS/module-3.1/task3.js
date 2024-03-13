// * Перебір масиву циклами for і for...of

//TODO:=========task-3=================
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою
//циклу for.

// Вихідні дані:
// const num = [5, 8, 10, 9, 6];

// function showNumbersFor(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     console.log(`Index: ${i} = ${numbers[i]}`);
//   }
// }
// console.log(showNumbersFor(num));

const num = [5, 8, 10, 9, 6];
function showNumbersForOf(numbers) {
  for (let number of numbers) {
    console.log(number);
  }
}
console.log(showNumbersForOf(num));
