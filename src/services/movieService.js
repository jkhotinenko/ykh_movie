import {apiService} from "./apiService";

const movieService={
    getAll:(page=1)=>apiService.get(`/discover/movie`,{params:{page}} ),
    search:(query,page=1)=>apiService.get('/search/movie',{params:{query,page}}),
    genres:()=>apiService.get('/genre/movie/list')
}

export {movieService}