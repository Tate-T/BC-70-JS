import { createListCards } from './createListCards';
import { getProducts } from './api';
import { openModal, ccloseModalAdd } from './product-modal';
import { createAddModal } from './createNewProductModal';

const btnAdd = document.querySelector('.add-product');
const refs = {
  listElement: document.querySelector('.products-list'),
  backdropElement: document.querySelector('.backdrop'),
  addModal: document.querySelector('.backdrop-add .modal-add'),
};

getProducts()
  .then(data => {
    console.log(data);
    const cards = createListCards(data);
    refs.listElement.insertAdjacentHTML('beforeend', cards);
  })
  .catch(err => err);

const createOpenModalLayout = () => {
  const modalLayout = createAddModal();
  console.log(typeof modalLayout);
  // refs.addModal.insertAdjacentHTML('afterbegin', modalLayout)
  console.log(refs.addModal);
  refs.addModal.innerHTML = modalLayout;
  refs.backdropElement.classList.remove('is-open');
  openModal();
  ccloseModalAdd();
};

btnAdd.addEventListener('click', createOpenModalLayout);
