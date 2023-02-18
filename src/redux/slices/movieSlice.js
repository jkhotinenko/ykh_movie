import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState={
    movies:[],
    prev:null,
    next:null,
    movieForUpdate:null,
    errors:null,
    loading:null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page},thunkAPI)=>{
        try {
            const {data} = await movieService.getAll(page);
            return data.results;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.responce.data)
        }
    }
);

const movieSlice=createSlice({
    name:'movieSlice',
    initialState,
    reducers:{

    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
                const {prev,next,items}=action.payload
                state.movies = items
                state.prev=prev
                state.next=next
            })
});

const {reducer:movieReducer} = movieSlice;

const movieActions={
    getAll
}


export {movieReducer,movieActions}