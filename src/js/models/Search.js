import axios from 'axios';

export default class Search{
    constructor(query){
        this.query=query;
    }

    async getResult(){
        const key="d50f600c";
        try{
            const result=await axios(`http://www.omdbapi.com/?&apikey=${key}&s=${this.query}`);
            this.res=result.data.Search;
           
        }catch(error){
            alert(error)
        }
    }
}