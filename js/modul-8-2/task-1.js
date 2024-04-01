// Деструктуризувати наступні об’єкти:
// Об’єкт user
const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  location: {
    country: "Ukraine",
    city: "Dnipro"
  }
};
// console.log(user.age);
// console.log(user.location.city);
// const city = user.location.city;
// const age = user.age;
// console.log(city, age);

// const { name: userName, age, email, location, pasword: userPassword = "empty" } = user;
// console.log(userName, age, email, location, userPassword);

// Глибока деструктуризація, коли ми робимо змінними ключі глибших рівнів вкладенності
const {
  name: userName,
  age,
  email,
  location: { country, city: userCity },
  pasword: userPassword = "empty"
} = user;
console.log(userName, age, email, country, userCity, userPassword);

// task-2
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows", "rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true
  }
};
const {
  make,
  model,
  year,
  features,
  safety: { airbags, antilock_brakes, stability_control }
} = car;
