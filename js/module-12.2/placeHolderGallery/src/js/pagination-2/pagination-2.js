import { getSomePosts } from './axios-api';
import { createPosts } from './createPosts';
import { createPagBtns } from './create-pag-btn';

const postsEl = document.querySelector('.posts');
const pagList = document.querySelector('.pag-list');
let pagePosts = 1;

const renderPosts = async () => {
  pagePosts = 1;
  try {
    const res = await getSomePosts(1);
    postsEl.innerHTML = createPosts(res);
    const postMarkup = await createPagBtns();
    pagList.insertAdjacentHTML('beforeend', postMarkup);
  } catch (err) {
    throw new Error(err);
  }
};

const onPagBtnClick = async e => {

  const chosenPage = e.target.textContent;
  if (e.target.nodeName === 'BUTTON') {
    try {
      const res = await getSomePosts(chosenPage);
      postsEl.innerHTML = createPosts(res);
      const pagesBtns = document.querySelectorAll('.pag-btn');

      pagesBtns.forEach(btn => btn.classList.remove('current-page'));
      e.target.classList.add('current-page');
    } catch (err) {
      throw new Error(err);
    }
  }
};

renderPosts();

pagList.addEventListener('click', onPagBtnClick);
