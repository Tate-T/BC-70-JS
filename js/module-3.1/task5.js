//TODO:=========task-5=================
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву

const array = [-1, 50, 0, 13, 4, 22, 9, -100, 75, 100]
function getMaxNum(arr) {
    let maxNum = arr[0];
    // Вирішення перше
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > maxNum) {
    //        maxNum = arr[i]
    //    }
    // }

    // Вирішення друге
    // for (const elem of arr) {
    //     if (elem > maxNum) {
    //         maxNum = elem
    //     }
    // }

    // Вирішення третє
    maxNum = Math.max(...array)
    return maxNum;
}
console.log(getMaxNum(array));