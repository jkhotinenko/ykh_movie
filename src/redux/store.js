import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {searchReducer} from "./slices/searchSlice"
import {genresReducer} from "./slices/genresSlice";
import {posterReducer} from "./slices/posterSlice"
import {gmReducer} from "./slices/gmSlice"


const rootReducer=combineReducers({
    movies:movieReducer,
    searchMovies:searchReducer,
    genres:genresReducer,
    movie:posterReducer,
    gmovies:gmReducer
});

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {setupStore}