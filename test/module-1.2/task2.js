// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.

// 1 - function declaration (оголошення функції)

// function sqrtNumber(number) {
//     const findNumber = Math.sqrt(number);
//     return findNumber;
// }
 
// const result = sqrtNumber(25);
// function sqrtNumber(number) {
//     const findNumber = Math.sqrt(number);
//     return findNumber;
// }
// console.log(result);

// 2 - function expression (функціональний вираз) 
const sqrtNumber = (number) => {
    const findNumber = Math.sqrt(number);
    return findNumber;
}
const result = sqrtNumber(25);
console.log(result);

