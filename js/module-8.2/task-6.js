//Напишіть функцію, яка приймає об'єкт, що містить інформацію про студента (ім'я, прізвище, оцінки за три предмети) та використовує деструктуризацію для повернення середньої оцінки студента.
const student = {
  name: "Bruce",
  surname: "Lee",
  grades: [4, 5, 3],
};
// const calculateAverageGrade = (student) => {
//   const { name, surname, grades } = student;
//     const avgGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
//     console.log(avgGrade);
//   return `${name} ${surname} has average grade ${avgGrade}`
// };

const calculateAverageGrade = ({ name, surname, grades }) => {
  const avgGrade =
    grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
  console.log(avgGrade);
  return `${name} ${surname} has average grade ${avgGrade}`;
};

console.log(calculateAverageGrade(student));
