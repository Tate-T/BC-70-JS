// Створіть клас Book, який буде мати властивості title (назва книги),
//author(автор книги) та price(вартість книги).Створіть клас Bookstore, який буде мати
//властивість books(масив з об'єктів типу Book). Створіть методи для додавання книги у
//книжковий магазин(addBook(book)), видалення книги з книжкового магазину(removeBook(book))
// та виведення всіх книг з книжкового магазину(listBooks()).
// Приклад використання:

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 10);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
const book3 = new Book("1984", "George Orwell", 8);

class Bookstore {
  constructor() {
    this.booklist = [];
  }
  addBook(book) {
    this.booklist.push(book);
  }
  removeBook(book) {
    this.booklist = this.booklist.filter((x) => x.title !== book.title);
  }
  listBooks() {
    return this.booklist;
  }
  addBooks(...books) {
    this.booklist = [...this.booklist, ...books];
  }
}

const myBookstore = new Bookstore();

// myBookstore.addBook(book1);
// myBookstore.addBook(book2);
// myBookstore.addBook(book3);

// console.log(myBookstore.listBooks()); // виведе всі книги у книжковому магазині

// myBookstore.removeBook(book2);

// console.log(myBookstore.listBooks()); // виведе всі книги у книжковому магазині (без book2)

myBookstore.addBooks(book1, book2, book3);

console.log(myBookstore.listBooks());
