/*
Дано:
Массив объектов.
Каждый объект, это название фильма и его рейтинг.

Задача:
Создать табличное представление произвольного вида (название фильма, средний рейтинг).
Если у фильма нет рейтинга, то вывод строки "нет рейтинга".
*/

const movies = require('./db.js').movies

/**
 * Функция возвращающая название фильма
 * @argument {Object} movieObject Объект, описывающий один фильм
 * @returns {string} Название фильма
 */
function getNameOfMovie(movieObject) {
    return Object.values(movieObject)[0]
}

/**
 * Функция возвращающая среднее значение рейтингов фильма
 * @argument {Object} ratingsMoviesObject Объект, содержащий рейтинги
 * @returns {Number} Среднее значение рейтингов
 */
function getAverageRatingOfMovie(ratingsMoviesObject) {
    if (ratingsMoviesObject === null) return 'No rating'
    let counter = 0
    let sum = 0

    // for (const ratingOfMovie of Object.values(ratingsMoviesObject)) {
    //     sum += ratingOfMovie
    //     counter += 1
    // }

    // Object.values(ratingsMoviesObject).map((ratingOfMovie) => {
    //     sum += ratingOfMovie
    //     counter += 1
    // })

    Object.values(ratingsMoviesObject).forEach((ratingOfMovie) => {
        sum += ratingOfMovie
        counter += 1
    })

    return sum / counter
}

/**
 * Функция-обработчик одного элемента массива - объекта
 * @argument {Object} movieObject Элемент массива - объект
 * @returns {Array} Массив из названия фильма и среднего значение рейтингов
 */
function handler(movieObject) {
    const name = getNameOfMovie(movieObject)
    const rating = getAverageRatingOfMovie(Object.values(movieObject)[1])
    return [name, rating]
}

// Применение функции-обработчика ко всему массиву
const newArray = movies.map(handler)

// Вывод нового массива
newArray.forEach((element) => {
    console.log(`${element[0]} - ${element[1]}`)
})
