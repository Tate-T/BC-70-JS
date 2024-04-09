// Напишіть функцію rejectWithError, яка приймає повідомлення про помилку і повертає Promise, який відхиляється з вказаною помилкою.

const rejectWithError = (errorMessage) => {
  return Promise.reject(errorMessage);
};

// const rejectWithError = (errorMessage) => {
//     const promise = new Promise((res, rej) => {
//       rej(errorMessage)
//     })
//     return promise
// };

const errorMessage = "Something went wrong";
rejectWithError(errorMessage).catch((error) => {
  console.log(error); // Помилка "Something went wrong"
});
