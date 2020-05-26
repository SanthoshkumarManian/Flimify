import axios from 'axios';

export default class Movie{
    constructor(id){
        this.id=id;
    }
    async getMovie(){
        const key="d50f600c";
        try{
            const result=await axios(`http://www.omdbapi.com/?&apikey=${key}&i=${this.id}`);
            this.title=result.data.Title; 
            this.year=result.data.Year;
            this.boxOffice=result.data.BoxOffice;
            this.awards=result.data.Awards;
            this.language=result.data.Language;
            this.released=result.data.Released;
            this.runtime=result.data.Runtime;
            this.actors=result.data.Actors;
            this.poster=result.data.Poster;
            this.production=result.data.Production;
            this.director=result.data.Director;
           
        }catch(error){
            alert(error)
        }
    }
}