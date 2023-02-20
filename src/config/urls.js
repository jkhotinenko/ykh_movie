const baseURL = 'https://api.themoviedb.org/3';

const movie ='/discover/movie';

const search = '/search/keyword';

const urls={
    movie:{
        movie,
        byPage:(page) =>`${movie}?page=${page}`,
        search:(query) => `${search}?query=${query}`
    }
}

export {
    baseURL,
    urls
}