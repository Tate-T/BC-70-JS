const book = {
  year: 2020,
  author: "Boris",
};
const book1 = Object.create(book);
console.log(book);
// console.log(book1);
// console.log(book1.year);
book1.bookName = "Tom";

const book2 = Object.create(book);
book2.bookName = "YYY";
// console.log(book);
// console.log(book2);

const newBook1 = Object.create(book1);
newBook1.isNewBook = true;
console.log(newBook1);

for (const key in newBook1) {
  if (!newBook1.hasOwnProperty(key)) {
    console.log(key);
  }
}
