//* Напишіть функцію, яка приймає два числа і повертає проміс,
//* який виконується з результатом їхнього додавання.
//* Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено
//* з повідомленням "Неправильні аргументи".

const getSum = (num1, num2) => {
  const promise = new Promise((res, rej) => {
    // if (!isNaN(Number(num1))  && !isNaN(Number(num2))) {
    //   res(num1 + num2);
    // } else {
    //   rej("Неправильні аргументи");
      //   }
      // 2 variant
      num1 = Number(num1)
      num2 = Number(num2);
      if (!Number.isNaN(num1) && !Number.isNaN(num2)) {
        res(num1 + num2);
    } else {
        rej("Неправильні аргументи");
    }
  });
  return promise;
};
// getSum(12, 7)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


