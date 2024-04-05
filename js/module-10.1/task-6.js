// Створіть функцію getSecondsToTomorrow(), що повертає кількість секунд до завтра.
// Наприклад, якщо зараз є 23:00, то: getSecondsToTomorrow() === 3600
// P.S. Функція повинна працювати в будь-який день, “сьогодні” не є жорстко закодованим.

const getSecondsToTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDay() + 1);
    const diff = (tomorrow.getTime() - today.getTime()) / 1000;

    return `До завтра залишилось ${Math.floor(diff)} секунд`
}
console.log((getSecondsToTomorrow()));