import {apiService} from "./apiService";

const movieService={
    getAll:()=>apiService.get(`/discover/movie?page=1` )
}

export {movieService}