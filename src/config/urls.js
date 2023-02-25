const baseURL = 'https://api.themoviedb.org/3';

const movie ='/discover/movie';

const search = '/search/keyword';

const genres = '/genre/movie/list';

const urls={
    movie:{
        movie,
        byPage:(page) =>`${movie}?page=${page}`,
        search:(query) => `${search}?query=${query}`,
        genres:()=>`${genres}`
    }
}

export {
    baseURL,
    urls
}