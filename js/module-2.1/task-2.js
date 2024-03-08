// // Що буде в консолі:
// if (!true) {
//     console.log("Привіт");
//   }

// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const message = prompt('Введіть число')

// function checkMessage() {
//     if (message > 55 && message <=99) {
//         return  "Число потрапляє в діапазон"
//     } else {
//         return "Число не потрапляє в діапазон"
//     }
// }
// console.log(
//     checkMessage()

// )


function checkMessage() {
    const message = prompt('Введіть число');
    return message > 55 && message <=99 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон";
}
console.log(
    checkMessage()

)