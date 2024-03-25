//Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. Використовуючи метод .length, вивести в консоль кількість символів у рядку.//
// const myName = "Veronika";
// const surName = "Karaulova";
// const fullName = myName + " " + surName;
// console.log(fullName);
// const nameLength = fullName.length;
// console.log(fullName.length);
const myName = prompt("Please enter your name");
const surName = prompt("Please enter your surname");
//const fullName = myName + " " + surName;//
const fullName = `My Name is ${myName} and my surname is ${surName}`
console.log(fullName);
const nameLength = fullName.length;
console.log(fullName.length);