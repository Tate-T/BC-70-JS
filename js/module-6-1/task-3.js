// Напиши функцію-конструктор Account, яка створює 
// об'єкт з властивостями login і email. 
// В prototype функції - конструктора добав метод getInfo(), який виводить 
// в консоль значення полів login і
//  email об'єкта який його викликав.
function Account(data) {
    this.login = data.login;
    this.email = data.email;
}
const data = {
    login: 'Goit',
    email: 'goit@.com',

}
const userAccount = new Account(data)
console.log(userAccount)
Account.prototype.newInfo = function () {
    const message = `You login ${this.login} and email ${this.email}`
    return message;
}
console.log(userAccount.newInfo())
