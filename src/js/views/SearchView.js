 import {elements} from './base';

 export const getInput=()=>elements.searchInput.value;

 export const clearInput=()=>{
     elements.searchInput.value='';
    };

export const clearResult=()=>{
    elements.searchResList.innerHTML='';
    elements.searchResPage.innerHTML='';
};

 const renderMovies=Movies=>{
        const html=`<li>
        <a class="results__link" href="#${Movies.imdbID}">
            <figure class="results__fig">
                <img src="${Movies.Poster}" alt="${Movies.Title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${Movies.Title}</h4>
                <p class="results__author">${Movies.Type}</p>
            </div>
        </a>
    </li>`;

    elements.searchResList.insertAdjacentHTML('beforeend',html);
 };

 const createButton=(page,type)=>`
 <button class="btn-inline results__btn--${type}" data-goto=${type==='prev' ? page - 1: page + 1}>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-${type==='prev' ?'left' : 'right'}"></use>
                    </svg>
                    <span>Page ${type==='prev' ? page -1 : page + 1 }</span>
                </button>
        
 `;

 const renderButton=(page,numResults,pageEnd)=>{
    const pages=Math.ceil(numResults/pageEnd);
    let button;
    if(page === 1 && pages >1){
        button=createButton(page,'next');

    }else if(page<pages){
        button =`
            ${createButton(page,'prev')}
            ${createButton(page,'next')}
        `;
    }else if(page===pages && pages>1){
        button=createButton(page,'prev');
    }
    elements.searchResPage.insertAdjacentHTML('afterbegin',button);
 };
 
 export const renderResults=(Movies,page = 1,pageEnd = 7 )=>{
    const start=(page - 1 ) * pageEnd;
    const end = page * pageEnd;
    

   Movies.slice(start,end).forEach(renderMovies);

    renderButton(page,Movies.length, pageEnd); 
 };