import './js/productsApi';
import {
  getProductById,
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
} from './js/productsApi';
import { initialRender, renderElement, renderElements } from './js/renderFunc';

initialRender();

const elementsList = document.querySelector('.elements-list');

const button = {
  get: document.querySelector('.get-btn'),
  getAll: document.querySelector('.get-all-btn'),
  delete: document.querySelector('.delete-btn'),
  create: document.querySelector('.create-btn'),
  update: document.querySelector('.update-btn'),
};

const input = {
  get: document.querySelector('.get-input'),
  delete: document.querySelector('.delete-input'),
  create: {
    price: document.querySelector('.create-price-input'),
    type: document.querySelector('.create-type-input'),
    quantity: document.querySelector('.create-quantity-input'),
  },
  update: {
    id: document.querySelector('.update-id-input'),
    price: document.querySelector('.update-price-input'),
    type: document.querySelector('.update-type-input'),
    quantity: document.querySelector('.update-quantity-input'),
  },
};
console.log(input.create.quantity);
button.get.addEventListener('click', () => {
  const objectId = input.get.value;
  console.log(input.get.value);

  // getProductById(objectId)
  //   .then(data => renderElement(data))
  //   .then(row => (elementsList.innerHTML = row))
  //   .catch(err => err);
});

button.getAll.addEventListener('click', () => {
  getProducts()
    .then(data => renderElements(data))
    .then(row => (elementsList.innerHTML = row))
    .catch(err => err);
});

button.delete.addEventListener('click', () => {
  getProductById(input.delete.value)
    .then(data => renderElement(data))
    .then(
      row =>
        (elementsList.innerHTML =
          row + `<p>This product was succesfully deleted</p>`)
    )
    .catch(err => err);
  deleteProductById(input.delete.value)
    .then(data => renderElement(data))
    .then(row => (elementsList.innerHTML = row))
    .catch(err => err);
});

button.create.addEventListener('click', () => {
  const {
    price: { value: priceValue },
    type: { value: typeValue },
    quantity: { value: quantityValue },
  } = input.create;
  createProduct({
    price: priceValue,
    name: typeValue,
    quantity: quantityValue,
  })
    .then(data => renderElement(data))
    .then(row => (elementsList.innerHTML = row))
    .catch(err => err);
});

button.update.addEventListener('click', () => {
  const {
    id: { value: idValue },
    price: { value: priceValue },
    type: { value: typeValue },
    quantity: { value: quantityValue },
  } = input.update;
  updateProductById(
    {
      price: priceValue,
      name: typeValue,
      quantity: quantityValue,
    },
    idValue
  )
    .then(data => renderElement(data))
    .then(row => (elementsList.innerHTML = row))
    .catch(err => err);
});
