//TODO:=========task-3=================
// Написати функцію, яка приймає масив чисел та повертає новий масив, який містить всі числа,
// які є дублікатами в початковому масиві.Якщо немає дублікатів, функція повертає порожній масив.
// const arrNotSort = [4, 4, 4, 6, 7, 7, 8, 9, 8];
// function sortArr(arr) {
//   const newSortArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       newSortArr.push(arr[i]);
//     }
//   }
//   return newSortArr;
// }

// console.log(sortArr(arrNotSort));

//сформуємо масив чисел без повторень
const arrNotSort = [4, 4, 4, 6, 7, 7, 8, 9, 8];
function sortArr(arr) {
  const newSortArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newSortArr.includes(arr[i])) {
      continue;
    } else {
      newSortArr.push(arr[i]);
    }
  }
  return newSortArr;
}

console.log(sortArr(arrNotSort));
