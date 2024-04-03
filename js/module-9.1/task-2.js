// Створіть функцію, яка буде видаляти значення з localStorage за ключем.

// function removeDataFromStorage(key) {
//    return localStorage.removeItem(key)
// }
// removeDataFromStorage("userInfo")
const student = {
    block: 'JS',
    duration: 6
}


function addKeyToLS(obj) {
   localStorage.setItem("studentInfo", JSON.stringify(obj))
}

addKeyToLS(student)

// Створіть функцію, яка буде видаляти всі значення з localStorage.
// function removeLs() {
//     localStorage.clear()
// }
// removeLs()