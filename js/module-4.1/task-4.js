// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
//  Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
//  та метод "withdraw", який дозволяє знімати гроші з рахунку.
//  Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
// та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Melnyk",
  accountNumber: "84746",
  balance: 0,
  deposit(sumToAdd) {
    this.balance += sumToAdd;
    return `Amount added ${sumToAdd}. Balance: ${this.balance}`;
  },
  withdraw(sumToDraw) {
    if (this.balance >= sumToDraw) {
      this.balance -= sumToDraw;
      return `Amount withdrawn ${sumToDraw}. Balance: ${this.balance}`;
    } else {
      return "Sorry, there are not enough funds";
    }
  },
};
console.log(bankAccount.deposit(500));
console.log(bankAccount.withdraw(300));
console.log(bankAccount.deposit(100));
console.log(bankAccount.deposit(1000));
console.log(bankAccount.withdraw(1400));
console.log(bankAccount.withdraw(1300));
