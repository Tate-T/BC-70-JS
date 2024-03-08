// Використовуючи конструкцію if..else, напишіть код,
// що запитує: ‘Яка “офіційна” назва JavaScript ?’ Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”,
//  в іншому випадку — виведіть: “Ви не знаєте ? ECMAScript!”
console.log("ECMAScript".toLowerCase())
console.log("ECMAScript".toUpperCase())

// function askTestName()  {
//     const name = prompt("Яка “офіційна” назва JavaScript ?");
//     const normalizename = name.toLowerCase()
//     if (normalizename === "ECMAScript".toLowerCase()) {
//         alert("Правильно!") 
//     } else {
//         alert("Ви не знаєте ? ECMAScript!")
//     }
// }
// console.log(askTestName());

askTestName()
console.log(askTestName);

// function askTestName()  {
//     const name = prompt("Яка “офіційна” назва JavaScript ?").toLowerCase();
//     if (name === "ECMAScript".toLowerCase()) {
//         alert("Правильно!") 
//     } else {
//         alert("Ви не знаєте ? ECMAScript!")
//     }
// }

// function askTestName()  {
//     const name = prompt("Яка “офіційна” назва JavaScript ?");
//     if (name.toLowerCase() === "ECMAScript".toLowerCase()) {
//         alert("Правильно!") 
//     } else {
//         alert("Ви не знаєте ? ECMAScript!")
//     }
// }

function askTestName() {
    const name = prompt ("Яка “офіційна” назва JavaScript?");
    return name.toLowerCase() === "ECMAScript".toLowerCase() ? "Правильно!" : "Ви не знаєте ? ECMAScript!"
}

console.log(askTestName())