import { getAxiosPosts } from './axios-api';
import { createPosts } from './createPosts';

const showPostsBtn = document.querySelector('.show-posts-btn');
const postsEl = document.querySelector('.posts');
const loadMoreBtn = document.querySelector('.load-btn');
let pagePosts = 1;

const renderPosts = async () => {
  pagePosts = 1;
  try {
    const res = await getAxiosPosts(pagePosts);
    postsEl.innerHTML = createPosts(res);
    loadMoreBtn.classList.remove('is-hidden');
  } catch (err) {
    throw new Error(err);
  }
};

const onLoadMoreBtnClick = async () => {
  pagePosts++;
  try {
    const data = await getAxiosPosts(pagePosts);
    postsEl.insertAdjacentHTML('beforeend', createPosts(data));
  } catch (err) {
    throw new Error(err);
  }
};

loadMoreBtn.addEventListener('click', onLoadMoreBtnClick);
showPostsBtn.addEventListener('click', renderPosts);
