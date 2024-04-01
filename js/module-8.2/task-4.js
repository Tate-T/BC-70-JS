// Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком
// та використовує деструктуризацію для повернення рядка,
//     що містить інформацію про цю людину в такому форматі:
// "Мене звати Ім'я Прізвище і мені Вік років".
// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };
//
//   console.log(personInfo(person));

// Деструктуризація до виклику функції
// function personInfo(name, surname, age) {
//   return `Мене звати ${name} ${surname} і мені ${age} років`;
// }

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };
// const { name, surname, age } = person;
// console.log(personInfo(name, surname, age));

// Деструктуризація в самій функції
// function personInfo(person) {
//   const { name, surname, age } = person;
//   return `Мене звати ${name} ${surname} і мені ${age} років`;
// }

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };

// console.log(personInfo(person));

// Деструктуризація в параметрах функції
function personInfo({ name, surname, age }) {
  return `Мене звати ${name} ${surname} і мені ${age} років`;
}

const person = {
  name: "Nelli",
  surname: "Laroy",
  age: 25,
};

console.log(personInfo(person));
