import { createModalInfo } from './createModalInfo';
import { openModal, closeModal } from './product-modal';

const refs = {
  listElement: document.querySelector('.products-list'),
  modalElement: document.querySelector('.modal'),
};

export const createListCards = products => {
  const cardsList = products
    .map(product => {
      return `
        <li class="products-item" data-fruit="${product.productName}">
        <h2>Назва товару: ${product.productName}</h2>
        <p>Ціна: ${product.price} грн</p>
        <p>Кількість: ${product.quantity}</p>
    </li>
        `;
    })
    .join('');

  refs.listElement.addEventListener('click', event => {
    // if(event.target.nodeName !== 'LI' ) {
    //     return
    // } else {
    //     openModal()
    // }
    if (event.target.closest('.products-item')) {
      let findName = event.target.closest('.products-item').dataset.fruit;
      console.log(findName);
      const findProduct = products.find(
        product => product.productName === findName
      );
      console.log(findProduct);
      // refs.modalElement.insertAdjacentHTML("beforeend", createModal(findProduct));
      // openModal();

      refs.modalElement.innerHTML = createModalInfo(findProduct);
     

      openModal();
      const closeBtn = document.querySelector('.close-modal');
      closeBtn.addEventListener('click', closeModal);
    }
    
  });
  return cardsList;
};
