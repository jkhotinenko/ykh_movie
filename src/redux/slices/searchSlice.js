import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

const initialState={
    searchMovies:[],
    page:null,
    movieForUpdate:null,
    errors:null,
    loading:null
};


const search = createAsyncThunk(
    'searchSlice/search',
    async ({query},thunkAPI)=>{
        try {
            const {data} = await movieService.search(query);
            // console.log(data.results);
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
            .addCase(search.fulfilled,(state,action)=>{
                const {page,results}=action.payload;
                state.searchMovies=results;
                state.page=page;
                console.log(state);
            });
    }
});


const {reducer:searchReducer} = searchSlice;

const searchActions={
    search
}


export {searchReducer,searchActions}