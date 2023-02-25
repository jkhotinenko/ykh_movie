import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
import {searchReducer} from "./slices/searchSlice"
import {genresReducer} from "./slices/genresSlice";

const rootReducer=combineReducers({
    movies:movieReducer,
    searchMovies:searchReducer,
    genres:genresReducer
});

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {setupStore}