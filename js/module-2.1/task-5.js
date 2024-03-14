// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// function orderDrink(drink) {
//     if (drink === 'кава') {
//         return "Сума до сплати 40 грн"
//     }
//     else if (drink === 'Чай') {
//         return "Сума до сплати 25 грн"
//     }
//     else if (drink === 'Сік') {
//         return "Сума до сплати 50 грн"
//     }
//     else {
//        return "Напій відсутній"
//     }
// }

// console.log(orderDrink('кава'));

function orderDrink(drink) {
    switch (drink.toLowerCase()) {
      case "кава".toLowerCase():
        return "Сума до сплати 40 грн";
      case "Чай".toLowerCase():
        return "Сума до сплати 25 грн";
      case "Сік".toLowerCase():
        return "Сума до сплати 50 грн";
      default:
        return "Напій відсутній";
    }
  }
  console.log(orderDrink("сік"));