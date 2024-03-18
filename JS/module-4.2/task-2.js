//Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

const students = [
	{
		name: 'Dima',
		surname: 'Ivanov',
		avrMrk: 8,
	},
	{
		name: 'Kostya',
		surname: 'Ivanov',
		avrMrk: 4,
	},
	{
		name: 'Dima',
		surname: 'Ivanov',
		avrMrk: 8,
	},
	{
		name: 'Yevgen',
		surname: 'Ivanov',
		avrMrk: 3,
	},
	{
		name: 'Pavel',
		surname: 'Ivanov',
		avrMrk: 8,
	},
];

// function findTopStudent(students) {
//   let topStudent = students[0];
//   for (const student of students) {
//     if (student.avrMrk > topStudent.avrMrk) {
//       topStudent = { ...student };
//     }
//   }
//   return topStudent;
// }

console.log(findTopStudent(students));

function findTopStudent(students) {
	let topStudent = students[0];
	let topStudents = [];

	for (const student of students) {
		if (
			student.avrMrk >
			topStudent.avrMrk
		) {
			topStudent = { ...student };
		}
	}

	for (const student of students) {
		if (
			student.avrMrk ===
			topStudent.avrMrk
		) {
			topStudents.push(student);
		}
	}
	return topStudents;
}

// variant 3
function findTopStudent(students) {
  let maxRange = students[0].averageRange;
  let topSTudents = [];
  for (const student of students) {
    if (student.averageRange > maxRange) {
      maxRange = student.averageRange;
      topSTudents = [student];
    } else if (student.averageRange === maxRange) {
      topSTudents.push(student);
    }
  }
  return topSTudents;
}