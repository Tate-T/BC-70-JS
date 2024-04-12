/** @format */

//TODO:=========task-1=================
// * Масиви: літерал масиву, елементи, індексація, довжина

// Створіть масив styles з елементами 'Джаз' i 'Блюз'.
//  Додайте 'Рок-н-ролл' в кінець масиву.Замініть значення в середині масиву на 'Класика'.

// Вихідні дані:

const array = ['Джаз', 'Блюз'];
array.push('Рок-н-ролл');
//array[array.length] = 'Рок-н-ролл';
console.log(array);
array.splice(1, 1, 'Класика');
console.log(array);
//  Видаліть перший елемент масиву і покажіть його.

array.splice(0, 1);
const deletedElement = array.splice(
	0,
	1,
);
console.log(deletedElement);

//array.slice(1);
console.log(array);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!
//метод shift()- видаляє перший елемент масиву,
//метод unshift()- додає елемент на початок масиву
//push- додає елемент(елементи) в кінець масиву
//pop- видаляє елемент(елементи) з кінця масиву

//splice - дозволяє додаватиб видалятиб змінювати елементи в масиві
// -splice(position, quantity, newElement);
//position= index of the element to delete
//quantity= qty of the elements;
//newElement=the elements to add;
//1) додавання qty=0=> array.splice(index,0, newValue(s))
//2) видалення array.splice(index, quantityToDelete)
//3) заміна array.splice(index, qtyToChange,value1, [value2,..])

//  Додайте 'Реп' і 'Реггі' на початок масиву.Виведіть масив в консоль.

array.splice(0, 0, 'Реп', 'Реггі');
console.log(array);
