// Створіть блок з текстом та кнопкою "Розгорнути / Згорнути",
//     яка змінює видимість блока при натисканні.Використовуйте insertAdjacentHTML.

// const textElement = document.createElement("p");
// const buttonElement = document.createElement("button");
// buttonElement.textContent = "Розгорнути";
// buttonElement.type = "button";
// textElement.textContent = "яка змінює видимість блока при натисканні.Використовуйте insertAdjacentHTML";

// document.body.prepend(buttonElement, textElement);
// console.log(buttonElement, textElement);

// textElement.classList.add("hide");


// buttonElement.addEventListener("click", (event) => {
//     textElement.classList.toggle("hide");
//     if (textElement.classList.contains("hide")) {
//     buttonElement.textContent = "Розгорнути";
//     buttonElement.style.backgroundColor = "red";
//     }
//     else {
//         buttonElement.textContent = "Згорнути";
//         buttonElement.style.backgroundColor = "blue";
//     }
// });


// 2-ий варіант


const element = `<button type="button"> Розгорнути</button>
    <p class="hide">
      яка змінює видимість блока при натисканні.Використовуйте insertAdjacentHTML
    </p>` 


document.body.insertAdjacentHTML("afterbegin", element);

const buttonElement = document.querySelector("button");
const textElement = document.querySelector("p");
buttonElement.addEventListener("click", (event) => {
    textElement.classList.toggle("hide");
    if (textElement.classList.contains("hide")) {
    buttonElement.textContent = "Розгорнути";
    buttonElement.style.backgroundColor = "red";
    }
    else {
        buttonElement.textContent = "Згорнути";
        buttonElement.style.backgroundColor = "blue";
    }
});
