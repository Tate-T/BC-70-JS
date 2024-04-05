// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const { title, director: { name, nationality }, actors, release_year, ratings: { imdb, rotten_tomatoes } } = movie;
console.log(title, name, nationality, actors, release_year, imdb, rotten_tomatoes)

// Об’єкт books
const books = {
  count: 3,
  list: [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949
    }
  ]
}

const { count, list } = books;

const [item1, item2, item3] = list;
console.log(item1, item2, item3)

const { title: firstTitle, author: firstAuthor, year: firstYear } = item1;
const { title: secondTitle, author: secondAuthor, year: secondYear } = item2;
const { title: thirdTitle, author: thirdAuthor, year: thirdYear } = item3;

console.log(firstTitle, firstAuthor, firstYear);
console.log(secondTitle, secondAuthor, secondYear);

