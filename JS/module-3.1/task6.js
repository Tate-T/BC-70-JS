//TODO:=========task-6=================
// * Базові методи: split и join, indexOf і includes, push, slice і splice, concat
// Для масиву:
// 1) [1, 2, 3] додайте в кінець елементи 4, 5, 6;

const arr = [1, 2, 3];
const newArr = arr.concat(4, 5, 6);
console.log(newArr);

// 2) [1, 2, 3] додайте на початок елементи 4, 5, 6;

const newArr2 = arr.slice();
const a = [...arr]; // зробили копію масиву arr і записали в змінну a
newArr2.unshift(4,5,6)
console.log(newArr2);

// 3) ['js', 'css', 'jq'] на екрані виведіть перший елемент;
const arr3 = ["js", "css", "jq"];
console.log(arr3[0]);

// 4) ['js', 'css', 'jq'] виведіть останній елемент на екран;
const arr5 = ['js', 'css', 'jq'];
console.log(arr3[arr3.length - 1]);

// 5) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [1, 2, 3];

const arr6 = [1, 2, 3, 4, 5];
const newArr6 = arr6.slice(0, 3)
console.log(newArr6);

// 6) [1, 2, 3, 4, 5] за допомогою методу slice запишіть нові елементи [4, 5].

const arr7 = arr6.slice(-2)
console.log(arr7);




