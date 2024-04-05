// Завдання "Зміна кольору": Створіть блок,
//який змінює свій фоновий колір кожні 3 секунди.

const block = document.createElement("div");
block.textContent = "Привіт, я змінюю колір кожні 3 секунди";
document.body.append(block);

const interval = setInterval(() => {
  block.style.backgroundColor =
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();
}, 3000);
