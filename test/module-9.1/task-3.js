// Створіть функцію, яка буде повертати кількість елементів в localStorage

const student = {
  block: "Node.js",
  duration: 13
};

localStorage.setItem("studentstored", JSON.stringify(student));
console.log(localStorage);

function qtyOfEl() {
  return localStorage.length;
}

console.log(qtyOfEl());

// Створіть функцію, яка буде повертати масив ключів з localStorage

function objKeys() {
  return Object.keys(localStorage);
}

console.log(objKeys());
