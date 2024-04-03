const input = document.querySelector("input");
const body = document.querySelector("body");
const currentTheme = localStorage.getItem("style");

currentTheme === "dark"
  ? body.classList.add("dark-theme")
  : body.classList.remove("dark-theme");

const onInput = () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("style", "dark");
    return;
  } else {
    localStorage.setItem("style", "light");
  }
};

input.addEventListener("change", onInput);

console.log(input);
