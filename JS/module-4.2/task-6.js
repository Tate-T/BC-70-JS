// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.
const books = [
  { title: "Війна і мир", author: "Лев Толстой", year: 1869 },
  {
    title: "Преступление и наказание",
    author: "Федор Достоевский",
    year: 1866,
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    author: "Джоан Роулінг",
    year: 1997,
  },
  { title: "Мастер и Маргарита", author: "Михаил Булгаков", year: 1967 },
  { title: "1984", author: "Джордж Оруелл", year: 1949 },
  { title: "test book", author: "Михаил Булгаков", year: 1987 },
];

function findBooksByAuthor(books) {
  const fideAuthor = prompt("Введить автора книг");
  const titles = [];
  for (const book of books)
    if (fideAuthor === book.author) {
      titles.push(book);
    }
  if (titles.length === 0) {
    return "Книг автора немає в доступі ";
  }
  return titles;
}

console.log(findBooksByAuthor(books));
