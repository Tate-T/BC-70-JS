// // Напишіть функцію, яка отримує масив об'єктів  і повертає проміс,
// //  який виконується з масивом імен, відсортованих за алфавітом.
const people = [
  { name: "John", age: 25 },
  { name: "Anna", age: 30 },
  { name: "Peter", age: 40 },
  { name: "Mary", age: 35 },
];

function getNames(arr) {
    const promise = new Promise((resolve, reject) => {
    const names = arr.map(name => name.name)
    const res = names.toSorted()
    
     resolve(res)
    })
    return promise
}
getNames(people).then((date) => console.log(date))