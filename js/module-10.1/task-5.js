// Завдання "Затримка повідомлення": Створіть функцію,
// яка приймає текстове повідомлення та затримує його
// виведення на сторінку на певний час,
// використовуючи setTimeout.

const msg = `<div class="js-message">
      <p>Затримка повідомлення</p>
    </div>`;

// setTimeout(() => {
//   document.body.insertAdjacentHTML("afterbegin", msg);
// }, 2000);

// Реалізуйте годинник, який показує поточний час у форматі "години:хвилини:секунди". Оновлюйте годинник кожну секунду без використання вбудованих функцій для отримання поточного часу.

// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
const timer = document.querySelector(".timer");
const minutesEl = document.querySelector(".js-minutes");
const secondsEl = document.querySelector(".js-seconds");

const startPoint = {
  minutes: 1,
  seconds: 0,
};
const pad = (value) => {
  return String(value).padStart(2, "0");
};
minutesEl.textContent = pad(startPoint.minutes);
secondsEl.textContent = pad(startPoint.seconds);

const createMsg = () => {
  const msg = `<p class="timer-msg">Залишилось менше половини часу</p>`;
  timer.insertAdjacentHTML("beforeend", msg);
};

const intervalId = setInterval(() => {
  --startPoint.seconds;
  let { minutes, seconds } = startPoint;

  const allSeconds = minutes * 60 + seconds;
  minutes = Math.floor(allSeconds / 60);
  seconds = Math.floor(allSeconds % 60);

  if (minutes <= 0 && seconds < 0) {
    clearInterval(intervalId);
    return;
  }
  if (seconds === 30) {
    createMsg();
  }
  minutes = pad(minutes);
  seconds = pad(seconds);

  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}, 1000);
