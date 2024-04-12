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


const productList = document.querySelector(".product-list");

function createProductMarkup(productArr) {
    productArr.forEach(el => { 
        const productItem = document.createElement('li');
        productItem.classList.add("product-item");

        const productTitle = document.createElement('h2');
        productItem.classList.add('product-name');
        productItem.textContent = el.productName;

        const productPrice = document.createElement('p');
        productPrice.classList.add("product-price");
        productPrice.textContent = el.price;

        const productQuantity = document.createElement('p');
        productQuantity.classList.add("product-quantity");
        productQuantity.textContent = el.quantity;
        productItem.append(productTitle,productPrice,productQuantity);
        productList.append(productItem);
    });

    return productList

//   const productMarkup = productArr.map((el) => {
//     return `<li class="product-item">
//       <h2 class="product-name">${el.productName}</h2>
//       <p class="product-price">${el.price}</p>
//       <p class="product-quantity">${el.quantity}</p>
//     </li>`;
//   });
//   return productMarkup.join("");
}

console.log(createProductMarkup(products));

//productList.insertAdjacentHTML("afterbegin", createProductMarkup(products));