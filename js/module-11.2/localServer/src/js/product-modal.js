const refs = {
  backdropElement: document.querySelector('.backdrop'),
  closeModalBtn: document.querySelector('.close-modal'),
};
export const openModal = () => {
  refs.backdropElement.classList.add('is-open');
};

export const closeModal = event => {
  refs.closeModalBtn.removeEventListener('click', closeModal);
  console.dir(refs.closeModalBtn);
  refs.backdropElement.classList.remove('is-open');
  console.log(event);
};
export const ccloseModalAdd = () => {
  refs.closeModalBtn.addEventListener('click', () => {
    refs.backdropElement.classList.remove('is-open');
  });
};
