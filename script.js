

let numberOrfFilms;

function start() {
    numberOrfFilms = prompt('Сколько фильмoв вы уже посмотрели?' ,'');

    while (numberOrfFilms == '' || numberOrfFilms == null || isNaN(numberOrfFilms)) {
        numberOrfFilms = prompt('Сколько фильмoв вы уже посмотрели?' ,'');

    }
}

start();

const personalMovieDB = {
    count: numberOrfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




     function rememberMyFilms() {
         
     for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов', '');
        const   b = prompt('Насколько оцените его?', '');

       if (a != null && b != null && a != '' && b != a.length < 50) {
        personalMovieDB.movies[a] = b;
            console.log('done');
        }else {
           console.log('error');
            i--;
        }
    }

}
   // rememberMyFilms();
         
    
     function defectPersonalevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
         } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
         console.log("ВЫ класный зритель");
         } else if (personalMovieDB.count >= 30) {
             console.log("ВЫ киноман");
         } else {
             console.log("Произошла ошибка");
         }
    
     }
    // defectPersonalevel();

     function showMyDB (hidder) {
         if (!hidder) {
            console.log(personalMovieDB);
         }

     }
     showMyDB(personalMovieDB.privat);

     function writeYourGenres() {
         for (let i = 1; i <= 3; i++) {
             personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

         }
     }
     writeYourGenres();
     


     

