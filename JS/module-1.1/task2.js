
// Обчислити бонус для працівника зарплати, якщо він працює більше 40 годин на тиждень.
// Бонус дорівнює 20 % від зарплати за додаткові години.(використати тернарний оператор)

const salary = Number(prompt('Enter your salary'));
console.log(typeof salary);
const bonus = 20/100 * salary;

const hours = 40;
const totalSalary = bonus + salary;
console.log(totalSalary);
