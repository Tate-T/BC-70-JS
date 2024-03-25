//TODO:=========task-5=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку.
const letters = 'afamdfadfafyi'

function makeArreaLetter(str) {
    let newArr = []

    const arrStr = str.split('')

    for(let key of arrStr) {
        if(key === 'o' || key === 'a' || key === 'y' || key === "e" || key === 'i') {
            newArr.push(key)
        }
    }

    return newArr.length
}
console.log(makeArreaLetter(letters))