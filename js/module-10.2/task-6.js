// Напишіть функцію raceTimeout, яка приймає Promise і таймаут (у мілісекундах) і повертає Promise, який вирішується, якщо початковий Promise вирішується до закінчення таймауту, або відхиляється, якщо таймаут закінчується перед вирішенням початкового Promise.

const fetchDataPromise = fetch("https://api.example.com/data");
const timeout = 5000;

const raceTimeout = (promise, timeout) => {
  const newPromise = new Promise((res, rej) => {
    setTimeout(() => {
      return promise
        .then((data) => data.json())
        .then((data) => res(data))
        .catch((err) => rej("Timeout"));
    }, timeout);
  });
  return newPromise;
};

raceTimeout(fetchDataPromise, timeout)
  .then((data) => {
    console.log(data); // Результат початкового Promise, якщо він вирішується до закінчення таймауту
  })
  .catch((error) => {
    console.log(error);
  }); // Помилка "Timeout", якщо таймаут закінчився перед вирішенням початкового Promise

// const fetchDataPromise =  {name: "John" }
// const timeout = 5000;
// let dataFull;
//   let errMess;
// const raceTimeout = (promise, timeout) => {
//   console.log(promise);

//   const dataFromPromise = promise
//     .then((data) => {
//       console.log(data);
//       dataFull = data;
//       console.log(dataFull);
//       return dataFull;
//     })
//       .catch((err) => {
//         console.log(err);
//       errMess = err;
//       console.log(errMess);
//       return errMess;
//     });
//   console.log(dataFromPromise);

//   const newPromise = new Promise((res, rej) => {
//     console.log(errMess);
//     if (errMess) {
//       rej(errMess);
//     } else {
//       res(dataFull);
//     }
//   });
//   return newPromise;
// };
