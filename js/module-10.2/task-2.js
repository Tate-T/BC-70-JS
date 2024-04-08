// Напишіть функцію, яка отримує масив чисел і повертає проміс,
//     який виконується, якщо всі числа в масиві є парними.Якщо ж принаймні одне число непарне,
    // проміс повинен бути відхилено з повідомленням "Є непарні числа".

// const numbArr = [2, 4, 6, 8, 9];

// function parityCheck(numbArr){
//     const promis = new Promise((resolve,reject) => {
//         if(numbArr.every(e => e % 2 === 0)){
//             resolve("Всі числа парні");
//         }else{
//             reject("В масиві є не парне число");
//         }
//     });
//     return promis;
// }

// parityCheck(numbArr).then((value) => {console.log(value);}).catch((error) => console.log(error));


// не працює!!!!


// Promise.resolve([2, 4, 6, 8]).then((arr) => {

//     if(arr.every(e => e % 2 === 0)){
//         console.log("Всі числа парні");
//     }
// })
// Promise.reject('error').catch((error) => console.log(error));