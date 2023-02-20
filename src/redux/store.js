import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/movieSlice";
 import {searchReducer} from "./slices/searchSlice"

const rootReducer=combineReducers({
    movies:movieReducer,
    search:searchReducer
});

const setupStore =()=>configureStore({
    reducer:rootReducer
})

export {setupStore}