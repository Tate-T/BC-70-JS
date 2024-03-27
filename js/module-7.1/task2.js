// Створити заголовок з текстом 'Привіт, це перший мій створений елемент!'
// та додати до нього клас “title”, заздалегідь створений в style.css.
// Додати заголовок на сторінку

const titleElement = document.createElement('h1');
titleElement.textContent = 'Привіт, це перший мій створений елемент!';

titleElement.classList.add('title');
titleElement.style.color = 'red';
titleElement.style.textShadow = '2px 3px 4px green';
document.body.prepend(titleElement);