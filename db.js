/**
 * База данных фильмов
 * @module db
 */
module.exports = {
    movies: [
        {
            nameMovies: 'The Expanse',
            ratingsMovies: {
                John: 10,
                Jack: 3,
                Lana: 2,
            },
        },
        {
            nameMovies: 'The Mandalorian',
            ratingsMovies: {
                Dan: 9,
                Jane: 10,
            },
        },
        {
            nameMovies: 'Idiocracy',
            ratingsMovies: null,
        },
    ],
}
