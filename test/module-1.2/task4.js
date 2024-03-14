// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля. Попросити в користувача ввести пароль та перевірити чи він правильний.

const SAVED_PASSWORD = "qwerty12345";

function passChecker(password) {
  if (password === SAVED_PASSWORD) {
    return "Successfuly logged in!";
  } else {
    return "Wrong password :(";
  }
}

alert(passChecker("qwerty145"));
