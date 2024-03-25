/**
 * Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed".
 * Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія.
 * Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
 *
 * @format
 */
const currentTemperature = prompt(
	'input temperature',
);

const currentHumidity = 0;
const windSpeed = 0;
const weather = {
	temperature: currentTemperature,
	humidity: currentHumidity,
	windSpeed: windSpeed,
	checkTemp() {
		//     if (this.temperature >= 0) {
		//         return true
		//     }
		//     return false
		return this.temperature >= 0;
	},
};

console.log(weather.checkTemp());
