const numberOrfFils = prompt('Сколько фильмщв вы уже посмотрели?' ,'');

const personalMovieDB = {
    count: numberOrfFils,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('Насколько оцените его?', '');
    }
    personalMovieDB.movies[a] = b;


    console.log(personalMovieDB);

