const refs = {
  backdropElement: document.querySelector('.backdrop'),
};
export const openModal = () => {
  refs.backdropElement.classList.add('is-open');
};

export const closeModal = event => {
  const closeBtn = document.querySelector('.close-modal');
  closeBtn.removeEventListener('click', closeModal);
  console.dir(closeBtn);
  refs.backdropElement.classList.remove('is-open');
  console.log(event);
};
