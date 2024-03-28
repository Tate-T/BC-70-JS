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

// після доторкання до краю переміщуємо на протилежну сторону

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
      if (box.offsetTop < window.innerHeight - box.offsetHeight / 2) {
        box.style.top = `calc(${top + 1}%)`;
        top += 1;
      } else {
        //скрипт переміщення
        box.style.top = `calc(0% + ${box.offsetHeight / 2}px)`;
        top = ((box.offsetHeight / window.innerHeight) * 100) / 2;
      }
      break;

    case "ArrowUp":
      if (box.offsetTop > box.offsetHeight / 2) {
        box.style.top = `calc(${top - 1}%)`;
        top -= 1;
      } else {
        box.style.top = `calc(100% - ${box.offsetHeight / 2}px)`;
        top = 100 - ((box.offsetHeight / window.innerHeight) * 100) / 2;
      }
      break;

    case "ArrowLeft":
      if (box.offsetLeft > box.offsetWidth / 2) {
        box.style.left = `calc(${left - 1}%)`;
        left -= 1;
      } else {
        box.style.left = `calc(100% - ${box.offsetWidth / 2}px)`;
        left = 100 - ((box.offsetWidth / window.innerWidth) * 100) / 2;
      }
      break;

    case "ArrowRight":
      if (box.offsetLeft < window.innerWidth - box.offsetWidth / 2) {
        box.style.left = `calc(${left + 1}%)`;
        left += 1;
      } else {
        box.style.left = `calc(0% + ${box.offsetWidth / 2}px)`;
        left = ((box.offsetWidth / window.innerWidth) * 100) / 2;
      }
      break;
  }
});
