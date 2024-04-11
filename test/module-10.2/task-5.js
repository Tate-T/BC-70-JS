//* Використовуючи Promise.all, створіть Promise, який об'єднує результати з трьох інших Promise.
//* Використовуючи Promise.race, setTimeout створіть Promise, який поверне результат найшвидшого з двох інших Promise.
//* Використовуючи Promise.reject, створіть Promise, який завершується з помилкою.
//* Використовуючи Promise.resolve, створіть Promise, який завершується успішно з визначеним результатом.

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      res("Success Promise 1");
    } else {
      rej("Error Promise 1");
    }
  }, 1000);
});
// promise1.then((data) => console.log(data)).catch((err) => console.log(err));

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      res("Success Promise 2");
    } else {
      rej("Error Promise 2");
    }
  }, 2000);
});
// promise2.then((data) => console.log(data)).catch((err) => console.log(err));

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
      res("Success Promise 3");
    } else {
      rej("Error Promise 3");
    }
  }, 3000);
});

// promise3.then((data) => console.log(data)).catch((err) => console.log(err));

// повертає масив промісів, якщо всі проміси виконані успішно або першу помилку
Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// повертає перший виконаний проміс
Promise.race([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// повертає перший успішно виконаний проміс
Promise.any([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

Promise.reject('ERROR!!!').catch(err=>console.log(err))
Promise.resolve("SUCCESS").then(data=>console.log(data))