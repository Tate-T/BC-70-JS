// Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// variant 1
const listFruits = [
  {
    title: "banana",
    quantity: 5,
    price: 15,
  },
  {
    title: "apple",
    quantity: 10,
    price: 15,
  },
  {
    title: "orange",
    quantity: 8,
    price: 35,
  },
];
function calculateTotal(fruits) {
  let totalPrice = 0;
  for (const fruit of fruits) {
    totalPrice += fruit.quantity * fruit.price;
  }
  return totalPrice;
}
console.log(calculateTotal(listFruits));
// variant 2
const basket = {
  products: [
    {
      title: "banana",
      quantity: 5,
      price: 15,
    },
    {
      title: "apple",
      quantity: 10,
      price: 15,
    },
    {
      title: "orange",
      quantity: 8,
      price: 35,
    },
  ],
  calculateTotal() {
    let totalPrice = 0;
    for (const fruit of this.products) {
      totalPrice += fruit.quantity * fruit.price;
    }
    return totalPrice;
  },
};
console.log(basket.calculateTotal());

// variant 3

const products = {
  banana: 15,
  apple: 35,
  orange: 30,
};
function getProducts(products) {
  return Object.keys(products);
}
console.log(getProducts(products));

function productsQuantity(products) {
    let quantity = 0;
    // for (const key in products) {
    //     quantity += products[key]
    // }
    // or
    const values = Object.values(products)
    for (const value of values) {
        quantity += value;
    }
    return quantity
}
console.log(productsQuantity(products));
