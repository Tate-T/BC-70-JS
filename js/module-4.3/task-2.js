/*
 * Працюємо з кошиком продуктів
 * - Метод splice() - міняє масив
 * - Видалити
 * - Додати
 * - Оновити
 */
const product = ["🍎", "🍇", "🍋", "🍓"];

const products = [
    {
        productName: "🍎",
        price: 5,
        quantity: 8,
    },
    {
        productName: "🍇",
        price: 2,
        quantity: 6,
    },
    {
        productName: "🍋",
        price: 4,
        quantity: 6,
    },
    {
        productName: "🍓",
        price: 1,
        quantity: 3,
    },
];
//    1) Подивитися кошик продуктів
function showProducts(products) {
   
    let message = "У вашому кошику:"; 
    for (const product of products) {
        message += product.productName + " - " + product.quantity + ";";
    }
    return message;
}
console.log(showProducts(products));

// 2) Додати продукт у кошик





// 3) Видалити продукт з кошику




// 4) Збільшити кількість певного продукту у кошику




// 5) Порахувати кількість продуктів у кошику