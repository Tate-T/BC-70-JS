// / Вбудована функція setTimeout використовує колбек - функції.
// Створіть альтернативу яка базується на промісах.
// Функція delay(ms)
//  повинна повертати проміс, який перейде в стан resolved через ms мілісекунд,
//     так щоб ми могли додати до нього.then:
const promise = new Promise((resolve, reject) => {
    const isSucces = true;
    setTimeout(() => {
        if (isSucces) {
            resolve("Виконано");
            
        } else {
            reject("Помилка");
        }
    }, 2000);
});
promise.then((info) => {
    console.log(showInfo(info));
})
    .catch((error) => {
        console.log(error);
    
    });

function showInfo(data) {
    return `Ми отримали ${data}`;
};

promise.then((data) => {

}).catch((error) => {})