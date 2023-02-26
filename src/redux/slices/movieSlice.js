import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";



const initialState={
    movies:[],
    page:null,
    total_pages:null,
    movieForUpdate:null,
    errors:null,
    loading:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page},thunkAPI)=>{
        try {
            const {data} = await movieService.getAll(page);
            return data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);
const getAllgenres = createAsyncThunk(
    'movieSlice/getAll',
    async ({page,with_genres},thunkAPI)=>{
        try {
            const {data} = await movieService.getAllgenres(page,with_genres);
            return data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const {page, results,total_pages} = action.payload
                state.movies = results;
                state.page = page
                state.total_pages=total_pages

            })

    }
});



const {reducer:movieReducer} = movieSlice;


const movieActions={
    getAll,getAllgenres
}


export {movieReducer,movieActions}