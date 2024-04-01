// Напишіть функцію, яка отримує об'єкт зі списком користувачів
//     (поле "users"), де кожен користувач є об'єктом з полями
// "ім'я" та "вік", та використовує деструктуризацію для
// повернення списку користувачів, які старші за 18 років.

const data = {
  id: 1,
  users: [
    { name: "John", age: 25 },
    { name: "Jane", age: 17 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 20 },
  ],
};

const getAdultUsers = ({ users }) => {
  return users.filter((x) => x.age >= 18).toSorted((a, b) => b.age - a.age);
};

console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 20 }]
