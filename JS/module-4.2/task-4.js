// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false",
//  якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.

const movie = {
    title: "The Gentelmens",
    director: "Gay Richi",
    year: 2023,
    rating: 7,
    findHightRating () {
        if ( this.rating > 8) {
            return "true"
        }
        else {
            return "false"
        }
    }
}

console.log(movie.findHightRating());

const movies = [
    {
    title: "The Gentelmens",
    director: "Gay Richi",
    year: 2023,
    rating: 7,
    },
    {
        title: "Harry Potter",
        director: "J.Roaling",
        year: 2004,
        rating: 10,
    },

    {title: "The movie",
    director: "Stiven King",
    year: 2011,
    rating: 6,
    }
]

function findBestMovie (movies) {
    let findMovie;
    for (let movie of movies) {
        if (movie.rating > 8) {
            findMovie = movie.title
        }
    }
    return findMovie ? findMovie : "we dont found movies with hight rating"
}

console.log(findBestMovie(movies));