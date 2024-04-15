import { getAllPosts } from './axios-api';

export const createPagBtns = async () => {
  const limit = 10;
  const allPosts = await getAllPosts();
  const btnsQuantity = Math.ceil(allPosts.length / limit);
  let res = '';
  for (let i = 1; i <= btnsQuantity; i++) {
    res += `<li class="pag-item">
    <button type="button" class="pag-btn">${i}</button>
  </li>`;
  }
  return res;
};
