import {elements} from './base';
export const clearMovie=()=>{
    elements.movieDetails.innerHTML=``;
}
export const renderMovieDetails = movie =>{
    const html =`
    <figure class="movie__fig">
                <img src="${movie.poster}" alt="${movie.title}" class="movie__img">
                <h1 class="movie__title">
                    <span>${movie.title}</span>
                </h1>
            </figure>
            <div class="movie__details">
                <div class="movie__info">
                    <svg class="movie__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="movie__info-data movie__info-data--minutes">${movie.released}</span>
                   
                </div>
                <div class="movie__info">
                    <svg class="movie__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="movie__info-data movie__info-data--people">${movie.runtime}</span>
                   

                </div>
                <button class="movie__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart-outlined"></use>
                    </svg>
                </button>
            </div>



            <div class="movie__detailed">
                <ul class="movie__detaileds-list">
                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">Director:</div>
                        <div class="movie__detail">
                            <span class="movie__unit">${movie.director===undefined ? 'Not Updated' : movie.director}</span>
                           
                        </div>
                    </li>

                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">Production:</div>
                        <div class="movie__detail">
                            <span class="movie__unit">${movie.production===undefined ? 'Not Updated' : movie.production}</span>
                        </div>
                    </li>

                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">Actors  :</div>
                        <div class="movie__detail">
                            <span class="movie__unit"></span>
                            ${movie.actors===undefined ? 'Not Updated' : movie.actors}
                        </div>
                    </li>


                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">BoxOffice:</div>
                        <div class="movie__detail">
                            <span class="movie__unit">${movie.boxOffice === undefined ? 'Not Updated' : movie.boxOffice}</span>
                                
                        </div>
                    </li>

                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">Awards:</div>
                        <div class="movie__detail">
                            <span class="movie__unit">${movie.awards===undefined ? "Not Updated" : movie.awards}</span>
                            
                        </div>
                    </li>

                    <li class="movie__item">
                        <svg class="movie__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="movie__count">Language:</div>
                        <div class="movie__detail">
                            <span class="movie__unit">${movie.language===undefined ?'Not Updated' : movie.language}</span>
                           
                        </div>
                    </li>
                </ul>

                <button class="btn-small movie__btn">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to favourite list</span>
                </button>
            </div>

            <div class="movie__directions">
                <h2 class="heading-2">How about this movie?</h2>
                <p class="movie__directions-text">
                    This Movie was directed by
                    <span class="movie__by">${movie.director===undefined ? "director" : movie.director}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href="" target="_blank">
                    <span>directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>
    `; 
  
    elements.movieDetails.insertAdjacentHTML('afterbegin',html);
};