import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services/movieService";

//with_genres


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
            console.log("wg",with_genres);
            const {data} = await movieService.getAllgenres(page,with_genres);
             console.log("CAT gag",data.results);
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
                // const {items} =action.payload;
                state.gmovies = results;
                state.page = page
                state.total_pages=total_pages
                // state.next = next
                 console.log("state",state);
            })
    }
});



const {reducer:gmReducer} = gmSlice;


const gmActions={
    getAllgenres
}


export {gmReducer,gmActions}