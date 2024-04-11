// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const userName = 'Яна';
const userSurname = 'Самойлова';
function countName(){
let fullNameLength = 0;
  if ( userName.length > 2 && userSurname.length > 5){
    fullNameLength = userName.length + userSurname.length;
    return `${userName} - ${userName.length}, ${userSurname} - ${userSurname.length}.Загальна довжина повного імені ${fullNameLength} `;
  } else {
return 'неможливо виконати умову, виведіть ім’я ще раз'
  }
}
console.log(countName());