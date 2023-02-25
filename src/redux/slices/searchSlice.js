import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState={
    searchMovies:[],
    page:null,
    movieForUpdate:null,
    errors:null,
    loading:null
};


const searchf = createAsyncThunk(
    'searchSlice/search',
    async ({query,page},thunkAPI)=>{
        try {
            console.log("query",query);
            const {data} = await movieService.search(query,page);
            console.log(data.page);
             console.log("CAT results",data.results);
            return data;

        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);


const searchSlice=createSlice({
    name:'searchSlice',
    initialState,
    reducers:{
    },
    extraReducers:builder => {
        builder
            .addCase(searchf.fulfilled,(state,action)=>{
                const {page, results}=action.payload;
                state.searchMovies=results;
                state.m=results;
                console.log("ss-res",results);
                console.log("Movies",state.searchMovies);
                state.page=page;
                console.log("ss-state",state);
                console.log("m",state.m);
            });
    }
});


const {reducer:searchReducer} = searchSlice;

const searchActions={
    searchf
}


export {searchReducer,searchActions}