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

function addProduct(productName, price, quantity, products) {
  const newProduct = { productName, price, quantity };
  products.push(newProduct);
  return products;
}
console.log(addProduct("🍒", 2, 2, products));

// 3) Видалити продукт з кошику

function removeProduct(productName, products) {
  for (const product of products) {
    if (product.productName === productName) {
      products.splice(products.indexOf(product), 1);
    }
  }
  return products;
}

console.log(removeProduct("🍒", products));

// 4) Збільшити кількість певного продукту у кошику

function addMoreFruit(productName, products) {
  let addQuantity = Number(prompt("Скільки додаємо?"));
  for (const product of products) {
    if (product.productName === productName) {
      product.quantity += addQuantity;
    }
  }
  return products;
}

// console.log(addMoreFruit("🍓", products));

// 5) Порахувати кількість продуктів у кошику

function totalFruits(products) {
  let totalQuantity = 0;
  for (const product of products) {
    totalQuantity += product.quantity;
  }
  return totalQuantity;
}

console.log(totalFruits(products));
