const listElement = document.querySelector('.list');

console.log(listElement);

const listItems = document.querySelectorAll('.item');
console.log(listItems);

// const firstItem = listElement.firstElementChild
const firstItem = listItems[0];
console.log(firstItem);

const item = document.querySelector('.item');
console.log(item);

const secondItem = item.nextElementSibling;
console.log(secondItem);

const prelastItem = listElement.lastElementChild.previousElementSibling;
console.log(prelastItem);

const items = listElement.children;
console.log(items);

const link = document.querySelector('.link');
console.log(link.attributes);

link.href = './test';
console.log(link.attributes);
console.log(link.href);

link.setAttribute('target', '_blank');
console.log(link.target);

link.removeAttribute('target');
console.log(link.target);
console.log(link.attributes);

const instagramLink = document.querySelector('[href="instagram.com"]');
console.log(instagramLink);

const thirdLink = document.querySelector('[data-link]');
console.log(thirdLink);

if (thirdLink.dataset.link === 'test');

instagramLink.textContent = 'instagram';

// prelastItem.classList.add('preItem');
// console.log(prelastItem.attributes);

// prelastItem.classList.remove('item');
// console.log(prelastItem.attributes);


prelastItem.classList.replace('item', 'preItem');
console.log(prelastItem.attributes);

console.log(prelastItem.classList.contains('preItem'));

