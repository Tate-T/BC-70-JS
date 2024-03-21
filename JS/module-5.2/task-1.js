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

//Знайдемо кількість фруктів в кошику

const totalQuantity = (products) =>
  products.reduce((ttl, product) => ttl + product.quantity, 0);

console.log(totalQuantity(products));

// Знайдемо загальну вартість продуктів у кошику

const totalPrice = (products) =>
  products.reduce((ttl, product) => ttl + product.quantity * product.price, 0);

console.log(totalPrice(products));

//   Подивитися кошик продуктів

const viewBasket = (products) =>
  products.reduce(
    (msg, product) =>
      msg + ` ${product.productName} of quantity ${product.quantity} kg;`,
    "You have in the basket:"
  );
console.log(viewBasket(products));
