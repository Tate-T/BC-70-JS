// Створіть функцію, 
// яка буде перевіряти, чи існує об'єкт в localStorage за ключем.


const  isAvailable = () => {
    const available = localStorage.getItem('random') 

    if (available === undefined || available === null) {
        return 'Such key does not exist'
    }

    return available;

}

console.log(isAvailable());