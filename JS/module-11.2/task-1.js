// // Отримати список користувачів з GitHub API Опис:
// // Використайте публічне API GitHub для отримання списку користувачів.
// Зробіть GET - запит
// //  за адресою https://api.github.com/users та перегляньте
// отримані дані щодо користувачів.

const listEl = document.querySelector(".user-list");
function getUsers() {
  const fetchData = fetch("https://api.github.com/users").then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
  return fetchData;
}
getUsers()
  .then((response) =>{
    console.log(response);
    createList(response)
  })
  .catch((err) => err);

function createMarkUp(user) {
  const markUP = `<li>
        <h2>Login: ${user.login}</h2>
        <p>Id: ${user.id}</p>
        <img src="${user.avatar_url}"alt="">
      </li>`;
  return markUP;
}

function createList(users) {
  const markUp = users.map((user) => createMarkUp(user)).join("");
  listEl.insertAdjacentHTML("beforeend", markUp); 
}
