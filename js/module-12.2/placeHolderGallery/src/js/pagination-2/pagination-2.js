import { getSomePosts, getPostById, getAllPosts } from './axios-api';
import { createPosts } from './createPosts';
import { createPagBtns } from './create-pag-btn';
import { all } from 'axios';
// import { onSelectChange } from './onSelectChange';

const postsEl = document.querySelector('.posts');
const pagList = document.querySelector('.pag-list');
const userSelect = document.querySelector('[name="user-select"]');
const form = document.querySelector('.search-post');
const showPostsBtn = document.querySelector('.show-posts');
// let pagePosts = 1;

const pagData = {
  page: JSON.parse(localStorage.getItem(['userPagData'])).page ?? 1,
  select: JSON.parse(localStorage.getItem(['userPagData'])).select ?? 10,
};

localStorage.setItem('userPagData', JSON.stringify(pagData));

const renderPosts = async () => {
  const userPagData = localStorage.getItem(['userPagData']);

  let pagePosts = JSON.parse(userPagData).page;
  let limit = JSON.parse(userPagData).select;

  try {
    const res = await getSomePosts(pagePosts, limit);

    postsEl.innerHTML = createPosts(res);

    const postMarkup = await createPagBtns(limit);
    pagList.innerHTML = '';
    pagList.insertAdjacentHTML('beforeend', postMarkup);

    const pagBtns = pagList.querySelectorAll('.pag-btn');

    const [findBtn] = Array.from([...pagBtns]).filter(
      (btn, idx) => Number(pagePosts) === idx + 1
    );

    if (findBtn) {
      findBtn.classList.add('current-page');
    } else {
      const arr = Array.from([...pagBtns]);
      const lastBtn = arr[arr.length - 1];
      lastBtn.classList.add('current-page');
    }
  } catch (err) {
    throw new Error(err);
  }
};

const onPagBtnClick = async e => {
  const chosenPage = e.target.textContent;
  if (e.target.nodeName === 'BUTTON') {
    try {
      const res = await getSomePosts(chosenPage, userSelect.value);
      postsEl.innerHTML = createPosts(res);

      const pagesBtns = document.querySelectorAll('.pag-btn');

      pagesBtns.forEach(btn => btn.classList.remove('current-page'));
      localStorage.setItem(
        'userPagData',
        JSON.stringify({
          page: chosenPage,
          select: JSON.parse(localStorage.getItem(['userPagData'])).select,
        })
      );
      e.target.classList.add('current-page');
    } catch (err) {
      throw new Error(err);
    }
  }
};

renderPosts();

pagList.addEventListener('click', onPagBtnClick);

const onSelectChange = async () => {
  const userPagData = localStorage.getItem(['userPagData']);
  let limit = JSON.parse(userPagData).select;

  let allPosts = await getAllPosts();

  const btnsQuantity = Math.ceil(allPosts.length / limit);
  localStorage.setItem(
    'userPagData',
    JSON.stringify({
      page: btnsQuantity,
      select: userSelect.value,
    })
  );
  try {
    renderPosts();
  } catch (err) {
    throw new Error(err);
  }
};
userSelect.addEventListener('change', onSelectChange);

// 2. Реалізуйте функцію пошуку, яка дозволяє фільтрувати дані на основі певного критерію.

const onFormSubmit = async e => {
  e.preventDefault();
  if (form.elements.post_id.value.trim() === '') {
    alert('Ведіть ID посту');
    return;
  }
  try {
    console.log(form.elements.post_id.value);
    const res = await getPostById(form.elements.post_id.value);
    console.log(res);
    postsEl.innerHTML = createPosts([res]);
    pagList.innerHTML = '';
    form.elements.post_id.value = '';
  } catch (err) {
    throw new Error(err);
  }
};
form.addEventListener('submit', onFormSubmit);
showPostsBtn.addEventListener('click', renderPosts);

// 3. Підключіть можливість сортування даних за різними полями, наприклад, за назвою, датою тощо.

// 4. Додайте можливість зберігати стан пагінації, наприклад, використовуючи сесії або локальне сховище, щоб при поверненні на сторінку зберігалась поточна сторінка та інші параметри пагінації.
