const baseURL = 'https://api.themoviedb.org/3';

const movie ='/discover/movie';

const urls={
    movie:{
        movie,
        byPage:(page) =>`${movie}?page=${page}`
    }
}

export {
    baseURL,
    urls
}