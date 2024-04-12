// / Створіть змінну userName з ім’ям користувача і змінну
// payment з сумою до оплати.За допомогою шаблонного рядка виведіть н

// а екран через alert повідомлення на прикладі цього: «Дякуємо, Олександро! До сплати 300 гривень».

const userName = prompt('enter your name');
const totalPrice = prompt('enter your sum');

function showPayment(userName, totalPrice) {
    alert(`«Дякуємо, ${userName}! До сплати ${totalPrice} гривень»`)
};

const result = showPayment(userName, totalPrice);
console.log(result)

