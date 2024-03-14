// Напиши скрипт який підраховує загальну вартість покупки.
// Кількість товарів зберігається в змінній goods.
// Ціна кожного товару це випадкове число від 500 до 5000.
//  Записати суму в змінну totalPrice і вивести в консолі.

const goods = 10;
let totalPrice = 0;

for ( let i = 0; i < goods; i++) {
    let price = Math.floor(Math.random() * (5000 - 500) + 500);
    totalPrice += price;
    console.log(`For good ${i} price is ${price}, total is ${totalPrice}`);
}

console.log(totalPrice);
