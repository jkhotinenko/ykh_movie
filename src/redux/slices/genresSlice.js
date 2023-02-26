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
             // console.log("query",query);
            const {data} = await movieService.genres();
            // console.log(data.page);
             console.log("CAT data",data);
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
                // state.m=results;
                // console.log("ss-res",results);
                console.log("genres",state.genres);
                // state.page=page;
                // console.log("ss-state",state);
                // console.log("m",state.m);
            });
    }
});


const {reducer:genresReducer} = genresSlice;

const genresActions={
    genresf
}


export {genresReducer,genresActions}