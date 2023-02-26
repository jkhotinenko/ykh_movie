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


const getAllgenres = createAsyncThunk(
    'gmSlice/getAllgenres',
    async ({page,with_genres},thunkAPI)=>{
        try {
            const {data} = await movieService.getAllgenres(page,with_genres);
            return data;
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const gmSlice=createSlice({
    name:'gmSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => {
        builder
            .addCase(getAllgenres.fulfilled, (state, action) => {
                const {page, results,total_pages} = action.payload
                state.gmovies = results;
                state.page = page
                state.total_pages=total_pages
            })
    }
});



const {reducer:gmReducer} = gmSlice;


const gmActions={
    getAllgenres
}


export {gmReducer,gmActions}