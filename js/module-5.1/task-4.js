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

// const contTotalProducts = (product) => {
//     let totalQuantity = 0;
//     const total = product.map(prod => prod.quantity);
//     total.forEach(element => {
//         totalQuantity += element
//     });
//     return totalQuantity;
// }

// console.log(contTotalProducts(products));
//скоротимо
const countTotalProducts = (product) => {
    let totalQuantity = 0;
    product.map(prod => prod.quantity).forEach(element => {totalQuantity += element});    
    return totalQuantity;
}

console.log(countTotalProducts(products));

// Знайдемо загальну вартість продуктів у кошику
// const TotalPrice = (product) => {
//     let totalPrice = 0;
//     product.map(prod => prod.price * prod.quantity).forEach(element => {totalPrice += element});    
//     return totalPrice;
// }

const countTotalPrice = (product) => {
    let totalPrice = 0;
    product.forEach(element => totalPrice += element.price * element.quantity);    
    return totalPrice;
}

console.log(countTotalPrice(products));

const showProducts = (products) => {
    let message = "У вашому кошику:";
    products.forEach(element => message += element.productName + " - " + element.quantity + ":");
    // for (const product of products) {
    //   message += product.productName + " - " + product.quantity + ";";
    // }
    return message;
}

console.log(showProducts(products));

const removeProduct = (productName, products) => {
    products.forEach((option , index) => {
        if (option.productName === productName) {
            products.splice(index, 1);
        }
    });
    // products.find((option , index) => {
    //     if (option.productName === productName) {
    //         products.splice(index, 1);
    //     }
    // });
    // for (const product of products) {
    //   if (product.productName === productName) {
    //     products.splice(products.indexOf(product), 1);
    //   }
    // }
    return products;
  }

  console.log(removeProduct("🍓", products));
// 2) Додати продукт у кошик
  const addProduct = (productName, price, quantity, products) => {
    const newProduct = { productName, price, quantity };
    products.push(newProduct);
    return products;
  }
  //console.log(addProduct("🍒", 2, 2, products));

// 4) Збільшити кількість певного продукту у кошику
const addMoreFruit = (findProductName, products , addProduct) => {
    console.log(products);
    let addQuantity = Number(prompt("Скільки додаємо?"));
    
    products.forEach((element,index,arr) => {
            console.log(element);
            console.log(arr[arr.length - 1].productName);
            if (element.productName === findProductName) {
                element.quantity += addQuantity;
            }
            else if (arr[arr.length - 1].productName !== findProductName){
                addProduct(prompt("Введіть назву товару"), 2, addQuantity, arr);
            }
        });
   
    return products;
  }
  
   console.log(addMoreFruit("🍋", products, addProduct));
  

  
