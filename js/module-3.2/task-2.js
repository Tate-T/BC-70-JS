// Сформувати список гостей у вигляді повідомлення
let massege;
function makeGuestList(guest) {
    console.log(guest);
    massege = 'Список гостей: ' + guest.join(' ');
    console.log(massege);
    return massege;
}


const guest = ['Anna', 'Ruslan', 'Valentyn', 'Anton'];
const guestList = makeGuestList(guest);
console.log(guestList);
console.log(massege);