import {apiService} from "./apiService";

const movieService={
    getAll:(page=1)=>apiService.get(`/discover/movie`,{params:{page}} ),
    getAllgenres:(page=1,with_genres)=>apiService.get(`/discover/movie`,{params:{page,with_genres}} ),
    search:(query,page=1)=>apiService.get('/search/movie',{params:{query,page}}),
    genres:()=>apiService.get('/genre/movie/list'),
    getPoster:(id)=>apiService.get(`/movie/${id}`)
}

export {movieService}