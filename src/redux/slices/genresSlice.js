import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState={
    genres:[],
    page:null,
    movieForUpdate:null,
    errors:null,
    loading:null
};


const genresf = createAsyncThunk(
    'genresSlice/genres',
    async (thunkAPI)=>{
        try {
            const {data} = await movieService.genres();
            return data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const genresSlice=createSlice({
    name:'genresSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => {
        builder
            .addCase(genresf.fulfilled,(state,action)=>{
                const {genres}=action.payload;
                state.genres=genres;
            });
    }
});


const {reducer:genresReducer} = genresSlice;

const genresActions={
    genresf
}


export {genresReducer,genresActions}