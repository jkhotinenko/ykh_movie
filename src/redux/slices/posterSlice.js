import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState={
    id:null,
    movie: [],
    errors:null,
    loading:null
};

const getPosterf = createAsyncThunk(
    'posterSlice/getPoster',
    async ({id},thunkAPI)=>{
        try {
            if (id) {
            const {data} = await movieService.getPoster(id);
            return data;}
            else {
                return [];
            }
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);



const posterSlice=createSlice({
    name:'posterSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => {
        builder
            .addCase(getPosterf.fulfilled, (state, action) => {
                const movie = action.payload
                state.movie = movie;
            });
    }
});

const {reducer:posterReducer} = posterSlice;


const posterActions={
    getPosterf
}


export {posterReducer,posterActions}