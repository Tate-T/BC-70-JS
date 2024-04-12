const list = document.querySelector(".list");
// console.log(list.innerHTML);

// console.log(list.firstElementChild.innerHTML);
// console.log(list.firstElementChild.textContent);

// list.firstElementChild.innerHTML = "test row";
// console.log(list.firstElementChild.innerHTML);

const articleElement = document.createElement("article");
const title = "Рецепт млинців";

articleElement.innerHTML = `<h1 class="title">${title}</h1>
    <img src="" alt="" class="art-img" />
    <p class="art-p">
      Whisk until the batter is smooth and all the flour has been incorporated.
      Set the batter aside to rest for 30 mins, then whisk the melted butter
      into the batter.
    </p>
    <button class="art-btn"></button>`;

document.body.prepend(articleElement);

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
  {
    productName: "🍓",
    price: 1,
    quantity: 3,
  },
  {
    productName: "🍓",
    price: 1,
    quantity: 3,
  },
];

const productList = document.querySelector(".product-list");

function createProductMarkup(productArr) {
  const productMarkup = productArr.map((el) => {
    return `<li class="product-item">
      <h2 class="product-name">${el.productName}</h2>
      <p class="product-price">${el.price}</p>
      <p class="product-quantity">${el.quantity}</p>
    </li>`;
  });
  return productMarkup.join("");
}

console.log(createProductMarkup(products));

productList.insertAdjacentHTML("afterbegin", createProductMarkup(products));
