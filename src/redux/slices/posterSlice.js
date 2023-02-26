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
            console.log("id",id);
            if (id) {
            const {data} = await movieService.getPoster(id);
             console.log("data",data);
            return data;}
            else {
                console.log("id is null")
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
                console.log("state",state);
                const movie = action.payload
                // const {items} =action.payload;
                state.movie = movie;
                //state.page = page
                //state.total_pages=total_pages
                // state.next = next
                console.log(state);
                console.log(movie);
            });
    }
});

const {reducer:posterReducer} = posterSlice;


const posterActions={
    getPosterf
}


export {posterReducer,posterActions}