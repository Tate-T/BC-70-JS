const loginForm = document.querySelector(".login-form");
const inputCheckbox = document.querySelector("input[name='checkbox'");

const userData = JSON.parse(localStorage.getItem("userInfo")) ?? {};

const getDataFromLS = () => {
  try {
    if (userData === null || userData === "undefined") {
      return;
    }
    for (const key in userData) {
      loginForm.elements[key].value = userData[key];
    }
    if (userData.checkbox === "on") {
      inputCheckbox.checked = true;
    }
  } catch (e) {
    console.log(e.message);
  }
  console.log(userData);
};
getDataFromLS();

const onLoginFormInput = (e) => {
  const { name, value } = e.target;
  userData[name] = value;
  console.log(name, value);

  if (inputCheckbox.checked === false) {
    userData.checkbox = "off";
  } else {
    userData.checkbox = "on";
  }
  localStorage.setItem("userInfo", JSON.stringify(userData));
};

const onLoginFormSubmit = (e) => {
  e.preventDefault();
  console.log(localStorage);

  localStorage.removeItem("userInfo");
  loginForm.reset();
};

loginForm.addEventListener("input", onLoginFormInput);
loginForm.addEventListener("change", onLoginFormInput);
loginForm.addEventListener("submit", onLoginFormSubmit);
