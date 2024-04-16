//Додаткові функції пагінації:
// 1. Розширте функціональність пагінації, додавши можливість вибору кількості елементів на одній сторінці.
import { getSomePosts } from "./axios-api";
import { createPosts } from "./createPosts";
import { createPagBtns } from "./create-pag-btn";
const pagList = document.querySelector('.pag-list');
const userSelect = document.querySelector('[name="user-select"]');
const postsEl = document.querySelector('.posts');

export const onSelectChange = async (pagePosts) => {
  console.log(userSelect.value);
  pagePosts = 1;
  try {
    const res = await getSomePosts(1, userSelect.value);
    postsEl.innerHTML = createPosts(res);

    const postMarkup = await createPagBtns(userSelect.value);
    pagList.innerHTML = '';
    pagList.insertAdjacentHTML('beforeend', postMarkup);
    const firstBtn = pagList.querySelector('.pag-btn');
    firstBtn.classList.add('current-page');
  } catch (err) {
    throw new Error(err);
  }
};
