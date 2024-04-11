
// setTimeout(() => {
//     console.log('Hello')
// }, 1000)

// for (let i = 0; i < 10000; i++) {
//     console.log('Bye')
// }

// Завдання "Лічильник": Створіть лічильник,
// який збільшується на одиницю кожну секунду.
//  Виводьте значення лічильника на сторінці.


const span = document.querySelector('.span');


let counter = 0;
const timer = setInterval(() => {
    counter += 1;
    span.textContent = `${counter}`;
}, 1000)