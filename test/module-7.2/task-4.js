// Змінити фон елементу з id = "box" на інший колір, якщо користувач натискає клавішу y, то на жовтий,  якщо користувач натискає клавішу g, під час події keydown, тj на зелений… і т.д.

const elem = `<div id="box"></div>`;
document.body.insertAdjacentHTML("afterbegin", elem);
const box = document.querySelector("#box");
box.style.width = "100px";
box.style.height = "100px";
box.style.borderRadius = "50%";
box.style.margin = '100px auto'
box.style.boxShadow = "2px 3px 50px 25px green";
box.style.transition = "background-color 400ms linear, box-shadow 400ms linear";

document.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.code) {
    case "KeyY":
      box.style.backgroundColor = "yellow";
      box.style.boxShadow = "2px 3px 50px 25px yellow";

      break;
    case "KeyG":
      box.style.backgroundColor = "green";
      box.style.boxShadow = "2px 3px 50px 25px green";

      break;
    case "KeyR":
      box.style.backgroundColor = "red";
      box.style.boxShadow = "2px 3px 50px 25px red";

      break;
    case "KeyP":
      box.style.backgroundColor = "pink";
      box.style.boxShadow = "2px 3px 50px 25px pink";

      break;
    case "KeyO":
      box.style.backgroundColor = "orange";
      box.style.boxShadow = "2px 3px 50px 25px orange";

      break;
    case "KeyB":
      box.style.backgroundColor = "blue";
      box.style.boxShadow = "2px 3px 50px 25px blue";

      break;
  }
});
