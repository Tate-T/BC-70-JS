// Перемістити елемент з id="box" наліво, якщо користувач натискає
//стрілку вліво, та направо, якщо користувач натискає стрілку вправо,
//під час події keydown.

// <div id="box"></div>
// #box {
//   width: 50px;
//   height: 50px;
//   background-color: red;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
// }

const box = document.createElement("div");
box.id = "box";

box.style.width = "50px";
box.style.height = "50px";
box.style.backgroundColor = "red";
box.style.position = "absolute";
box.style.left = "50%";
box.style.top = "50%";
box.style.transform = "translate(-50%, -50%)";
let top = 50;
let left = 50;

document.body.append(box);

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowDown":
      if (top < 100 && box.of > 25) {
        box.style.top = `calc(${top + 1}%)`;
        top += 1;
      }
      break;

    case "ArrowUp":
      if (box.offsetTop > 25) {
        box.style.top = `calc(${top - 1}%)`;
        top -= 1;
      }
      break;

    case "ArrowLeft":
      if (box.offsetLeft > 25) {
        box.style.left = `calc(${left - 1}%)`;
        left -= 1;
      }
      break;

    case "ArrowRight":
      if (left < 100 && box.offsetLeft > 25) {
        box.style.left = `calc(${left + 1}%)`;
        left += 1;
      }
      break;
  }
});
console.log(window);
