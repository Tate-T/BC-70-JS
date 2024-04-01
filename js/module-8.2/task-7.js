//Напишіть функцію, яка отримує масив об'єктів з інформацією про товари (назва, ціна, кількість) та використовує деструктуризацію для обчислення загальної вартості товарів.

const items = [
  { name: "Футболка", price: 250, quantity: 2 },
  { name: "Джинси", price: 800, quantity: 1 },
  { name: "Кросівки", price: 1200, quantity: 1 },
];
const calculateTotalCost = (items) => {

    let totalPrice = 0;
    let itemsStr= [];
    items.forEach(({name, price, quantity}) => {
        totalPrice += price * quantity;
        itemsStr.push(`${name} у кількості ${quantity}шт.`)
    })
    return `У вашому кошику наступні товари: ${itemsStr.join(', \n')} на суму ${totalPrice}`

}
console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500
