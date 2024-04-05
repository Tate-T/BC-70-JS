// Створити статтю (наприклад рецепт млинців), де є заголовок, зображення, опис (текст), посилання та кнопка зі всіма обов’язковими атрибутими.
//     (можна використати абсолютний або відносний шлях до зображення) та додати
// їх на сторінку.

const articleElement = document.createElement('article');
const titleElement = document.createElement('h1');
titleElement.textContent = 'crepes recept'
const imgElement = document.createElement('img');
imgElement.src = 'https://media.eggs.ca/assets/RecipePhotos/_resampled/FillWyIxMjgwIiwiNzIwIl0/Basic-Crepes-023-3.jpg';
imgElement.alt = 'crepes pict';
imgElement.width = 366;
const desc = document.createElement('p');
desc.textContent = 'Whisk until the batter is smooth and all the flour has been incorporated. Set the batter aside to rest for 30 mins, then whisk the melted butter into the batter.';

const buttonElement = document.createElement('button');
buttonElement.textContent = 'read more..';
buttonElement.type = 'button';
buttonElement.classList.add('article-button')

articleElement.append(titleElement, imgElement, desc, buttonElement);
console.log(articleElement);
articleElement.style.backgroundColor = 'tomato';

document.body.prepend(articleElement);
