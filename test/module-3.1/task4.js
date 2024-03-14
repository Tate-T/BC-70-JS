"use strict";

//TODO:=========task-4=================
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.

// Вихідні дані:

const arr = [1, 4, 5, 7, 8, 12, 13, 15, 18];

function findEven(arr) {
  let res = [];
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (element % 2 === 0) {
      console.log(element);
      res.push(element);
    }
  }
  console.log(res);
}

findEven(arr);

// Створіть масив фруктів, для якого:
// 1) за допомогою методів масиву видаліть по фрукту з початку та кінця,  на їх місце додати нові фрукти;

// */

// 2) видалити 3-й елемент, та на його місце вставити декілька інших фруктів використовуючи метод (splice);

// 3) із зміненого масиву створіть повідомлення.

// Вихідні дані:

const fruits = ["apple", "banana", "orange"];

function exchangeFirstLast(firstFruit, lastFruit, fruits) {
  //   fruits.slice(1, fruits.length - 1).push(lastFruit);
  //   console.log(fruits);
  //   return fruits;

  //   fruits.pop();
  //   fruits.shift();
  //   fruits.push(lastFruit);
  //   fruits.unshift(firstFruit);
  fruits.pop();
  fruits.shift();
  fruits.splice(0, 0, firstFruit);
  fruits.splice(fruits.length, 0, lastFruit);
  console.log(fruits);
}

// exchangeFirstLast("pineapple", "kiwi", fruits);

const fruits2 = ["apple", "banana", "orange", "grape", "melon"];

function exchangeThird(firstFruit, secondFruit, thirdFruit, fruits2) {
  fruits2.splice(2, 1, firstFruit, secondFruit, thirdFruit);
  const msg = fruits2.join(" ");
  console.log(msg);
}

exchangeThird("avocado", "pineapple", "kiwi", fruits2);
