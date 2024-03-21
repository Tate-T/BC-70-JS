// Колбек функціїї, можна передавати будь яку кількість колбеків в аргументах
// function sumSalarry(arr, tax, showMassage) {
//     let totalSalary = 0

//     for(const key of arr) {
//         totalSalary += key - tax(key)
//     }

//     const massage = showMassage(totalSalary)

//     return massage
// }
// let sal = [2200, 4000, 5000, 6000, 8000]


// function showMassage(totalSalary) {
//     return `Сума зарплат стфновить ${totalSalary}`
// }

// console.log(sumSalarry(sal,countTax, showMassage))

// function countTax(salary) {
//     return salary * 0.2
// }

// Інлайнові колбеки
// let sal = [2200, 4000, 5000, 6000, 8000]

// function sumSalarry(arr, tax, showMassage) {
//     let totalSalary = 0

//     for (const key of arr) {
//         totalSalary += key - tax(key)
//     }

//     const massage = showMassage(totalSalary)

//     return massage
// }

// console.log(sumSalarry(sal, function countTax(salary) {
//     return salary * 0.2
// }, function showMassage(totalSalary) {
//     return `Сума зарплат стфновить ${totalSalary}`
// }))


// Скоротимо інлайнові колбеки, скоротимо на стрілкові
let sal = [2200, 4000, 5000, 6000, 8000]

function sumSalarry(arr, tax, showMassage) {
    let totalSalary = 0

    for (const key of arr) {
        totalSalary += key - tax(key)
    }

    const massage = showMassage(totalSalary)

    return massage
}

console.log(sumSalarry(sal, salary => salary * 0.2, totalSalary => `Сума зарплат стфновить ${totalSalary}`))

// Було 
// function countTax(salary) {
//     return salary * 0.2
// }

// Стало
// 1) Стрілкова фенкція з явним поверненням (return)
// const countTax = (salary) => {
//     return salary * 0.2;
// } 

// 2) Стрілкова функція з неявним поверненням, якщо одразу після фігурної дужки стоїть return, то ми його скорочуємо разом із дужками. 
const countTax = salary => salary * 0.2;
 
const showMassage = totalSalary => `Сума зарплат стфновить ${totalSalary}`;