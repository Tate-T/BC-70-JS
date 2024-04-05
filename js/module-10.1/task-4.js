const event = new Date();
const week = event.toLocaleDateString('uk-UA', { weekday: 'long' });
const year = event.toLocaleDateString('uk-UA', { year: 'numeric' });
const month = event.toLocaleDateString("uk-UA", { month: "long" });
console.log(week, year, month);

const pDays = document.querySelector(".js-days");
const pMonth = document.querySelector(".js-month");
const pYear = document.querySelector(".js-year");

pDays.textContent = week;
pMonth.textContent = month;
pYear.textContent = year;
