const formEl = `<form action="">
      <input type="text" name="name">
      <input type="email" name="email">
      <input type="checkbox" name="checkbox" >
      <button type="submit">Send</button>
    </form>`;
document.body.insertAdjacentHTML("afterbegin", formEl);

const form = document.querySelector("form");

const onFormSubmit = (e) => {
  e.preventDefault();
  console.dir(form.elements);
  const { name, email, checkbox } = form.elements;
  if (name.value === "" || email.value === "" || !checkbox.checked) {
    alert("Type your name");
  }
  const data = {
    [name.name]: name.value.trim(),
    [email.name]: email.value.trim(),
  };

  console.log(data);
  form.reset();
};
form.addEventListener("submit", onFormSubmit);
