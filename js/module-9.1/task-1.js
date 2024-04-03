// Створіть функцію, яка буде додавати об'єкт в localStorage. 
//  Назва об'єкту має бути ключем, а сам об'єкт - значенням.
const userInfo = {
    userName: "Ruslan",
    userPassword: "asdfg123",

}
function addToLocalStorage(userInfo) {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
   
}
addToLocalStorage(userInfo);

// Створіть функцію, яка буде отримувати об'єкт з localStorage. 
// Назва об'єкту має бути ключем, а сам об'єкт - значенням.

function dataLocalStorage() {
    const userData = localStorage.getItem("userInfo");   
    const parsedData = JSON.parse(userData); 
    return parsedData;
}
console.log(dataLocalStorage());