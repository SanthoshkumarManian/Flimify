import Search from './models/Search';
import * as SearchView from './views/SearchView';
import {elements,renderLoader,clearLoader} from './views/base';
import Movie from './models/Movie';
import * as MovieView from './views/movieView';

const state={}

const controlSearch = async () =>{
    const query=SearchView.getInput();

    if(query){

        state.Search=new Search(query);

        SearchView.clearInput();
        SearchView.clearResult();
        renderLoader(elements.searchRes);

        await state.Search.getResult();
        
        clearLoader();
        SearchView.renderResults(state.Search.res);
        
    }
}
elements.searchForm.addEventListener('submit',e=>{
    e.preventDefault();
    controlSearch();
}); 

elements.searchResPage.addEventListener('click',e=>{
    const btn=e.target.closest('.btn-inline');
    
    if(btn){
        const goToPage=parseInt(btn.dataset.goto,10);
        SearchView.clearResult();
        SearchView.renderResults(state.Search.res,goToPage);
    }
});


 
const controlMovie=async ()=>{

    const id=window.location.hash.replace("#",'');
    //console.log(id);

    if(id){

        MovieView.clearMovie();
        renderLoader(elements.movieDetails);
        state.Movie = new Movie(id);
        try{
           
            await state.Movie.getMovie();
            
            clearLoader();

            MovieView.renderMovieDetails(state.Movie);
           
        }catch(error){
            alert('page could not load');
        }
       
    }
}

//window.addEventListener('hashchange',controlMovie);
['hashchange','load'].forEach(event=>window.addEventListener(event,controlMovie));