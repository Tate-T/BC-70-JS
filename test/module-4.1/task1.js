// Присвоїти змінній apartment об'єкт, який описує квартиру з
// наступними характеристиками:
//imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
//descr - опис, значення "Spacious apartment in the city center";
//rating - рейтинг, значення 4;
//price - ціна, значення 2153;
//tags - метаінформація, масив ["premium", "promoted", "top"].

//Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт
// з інформацією про власника.Додай йому наступні властивості:
//name - ім'я власника, значення "Henry";
//phone - телефон, значення "982-126-1588";
//email - пошта, значення "henry.carter@aptmail.com".

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
}
// console.log(apartment);

apartment.owner = {
    ownerName: 'Henry',
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
}
// console.log(apartment);

// Доповни код, присвоївши оголошеним змінним вирази звернення
// до відповідних властивостей об'єкта apartment.
//aptRating - рейтинг;
//aptDescr - опис;
//aptPrice - ціна;
//aptTags - теги.

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// console.log(aptRating, aptDescr, aptPrice);


// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних
// властивостей об'єкта apartment.
// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

console.log(apartment);
const ownerName = apartment.owner.ownerName;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
// const lastIndex = apartment.tags.length - 1;
// const lastTag = apartment.tags[lastIndex];
const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// Доповни код, присвоївши оголошеним змінним вирази звернення до
// відповідних властивостей об'єкта apartment, використовуючи синтаксис
// «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
const aptRating = 'rating';
const aptDescr = 'descr';
const aptPrice = 'price';
const aptTags = 'tags';



const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    [aptDescr]: "Spacious apartment in the city center",
   [aptRating]: 4,
    [aptPrice]: 2153,
    [aptTags]: ["premium", "promoted", "top"],

    owner: {
        ownerName: 'Henry',
        phone: "982-126-1588",
        email: "henry.carter@aptmail.com",
    }
}

// const aptRating = apartment['rating'];


// console.log(aptRating);


// const userName = 'name';
// const userInfo = {
//     userPhoto: 'http...',
//     [userName]: 'Henry',
// }

//Доповни код, оновивши значення властивостей об'єкта apartment:
// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".
// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними
//вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.ownerName = 'Henry Sibola';
apartment.tags.push('trusted');

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
    country: 'Jamaica',
    city: 'Kingston',
}
console.log()
// apartment.location = {};

// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';