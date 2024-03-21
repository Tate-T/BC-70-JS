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
  
//   Сформувати масив назв фруктів

const productsName = products.map(product => product.productName)
console.log(productsName)
console.log(products.map(product => product.productName))

// Рахуємо середню ціну продуктів

// const totalPrices = products.reduce((totalPrices, product) => {
//     totalPrices += product.price;
//     return totalPrices
// }
// , 0)
// console.log(totalPrices)

// const everageTotalPrices = totalPrices / products.length;
// console.log(everageTotalPrices)

// скорочений варіант
const everageTotalPrices = products.reduce((totalPrices, product) => {
        totalPrices += product.price;
        return totalPrices
     } , 0) / products.length;

     console.log(everageTotalPrices)

// сформуємо колекцію товарів з ціною до 3 грн за кг

const cheapProductBasket = products.filter(product => product.price < 3)
console.log(cheapProductBasket);

// порахувати вартість фруктів з ціною більше за 3 грн за кг
const expensiveProductBasket = products.filter(product => product.price > 3).reduce((totalPrice, product) => {
    return totalPrice + product.price
}, 0)
console.log(expensiveProductBasket);

// Знайти продукт з назвою "🍋"

const findLemon = products.find(product => product.productName ===  "🍋" );
console.log(findLemon);

// Перевірити чи всі продукти в кошику мають ціну до 5 грн

const checkBasketPrices = products.every(product => product.price <= 5);
console.log(checkBasketPrices);

// Перевіримо чи є в кошику хоча б один продукт з ціною більше 5
 const checkPricesBasket = products.some(product => product.price > 5);
 console.log(checkPricesBasket);

 //   Подивитися кошик продуктів (перелік назв у вигляді месседжа)
 const namesArray = products.map(product => product.productName).join(", ")
 console.log(namesArray);

