/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', ()=>{
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),  
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
          
    const checkFilmLenght = (film) => {
        if(film.length > 21){
            return film.slice(0, 21)+'...';
        }
        else{
            return film;
        }
    };
    
   


    const sortArray = (arr) =>{
        arr.sort();
    };

    
    
    const deleteAdv = (arr) =>{
            arr.forEach(element => {
            element.remove();
        });
    };
    
    

    const makeChanges =() =>{
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = "url('img/bg.jpg')";
    };

    

    function createMovieList(films, parent){
            parent.innerHTML = "";
            sortArray(films);
            films.forEach((film, index)=>{
                parent.innerHTML += ` 
                    <li class="promo__interactive-item">
                    ${index+1}. ${checkFilmLenght(film)}
                        <div class="delete"></div>
                    </li>
                `;
        });

        document.querySelectorAll('.delete').forEach((btn, index)=>{
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(index, 1);
                createMovieList(films, parent);
            });
        });
    }

    

    sortArray(movieDB.movies);
    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
    addForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        const newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if(favorite){
            console.log('Добавляем любимый фильм');
        }

        if(newFilm){
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
            event.target.reset();
        }
       
    });  
    
         
            
          
    
    // let counter = 0;
    // const showEventTarget = (e) => {
    //     if(counter == 0){
    //         e.preventDefault();
    //         console.log(e.target);
    //         counter++;
    //     }
    //     else{
    //          btn.removeEventListener('click', showEventTarget);
    //     }
           
        
    // };
    
    // btn.addEventListener('click', showEventTarget);
});



    


