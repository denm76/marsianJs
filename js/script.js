/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'), 
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');   
      
      
adv.forEach(element => {
    element.remove();
});
genre.textContent = 'ДРАМА';
poster.style.background = "url('img/bg.jpg') center center/cover no-repeat";
movieDB.movies.sort();

movieList.innerHTML = "";

movieDB.movies.forEach((film, index)=>{
    movieList.innerHTML += ` 
        <li class="promo__interactive-item">${index+1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

const btn = document.querySelector('button');
let counter = 0;
const showEventTarget = (e) => {
    if(counter == 0){
        e.preventDefault();
        console.log(e.target);
        counter++;
    }
    else{
         btn.removeEventListener('click', showEventTarget);
    }
       
    
};

btn.addEventListener('click', showEventTarget);


    


