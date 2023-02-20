import {apiService} from "./apiService";

const movieService={
    getAll:(page=1)=>apiService.get(`/discover/movie`,{params:{page}} ),
    search:(query='')=>apiService.get('/search/keyword',{params:{query}})
}

export {movieService}