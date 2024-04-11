// Написати скрипт в якому користувач друкує на клавіатурі текст який відображається на сторінці.
//  При натисканні на кнопку “Очистити” очищувати надрукований текст.

const input = document.createElement("input");
input.setAttribute("type", "text");

const button = document.createElement("button");
button.setAttribute("type", "button");
button.textContent = "Reset";

const text = document.createElement("p");

document.body.append(input, button, text);

function eventHandler() {
  text.textContent = `Ви написали : ${input.value}`;
}

input.addEventListener("input", eventHandler);

button.addEventListener("click", () => {
  input.value = "";
  text.textContent = "";
});
