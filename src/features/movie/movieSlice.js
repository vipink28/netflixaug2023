import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { endpoints, platforms, requests } from "../../helper/requests";

const initialState = {
    popularMovies:{
        data: null,
        status: "idle",
        error: null
    }
}

export const fetchPopularMovies = createAsyncThunk(
    'movie/fetchPopularMovies',
    async()=>{
        const response = await axios.get(requests.getCollections(platforms.movie, endpoints.popular));
        return response.data;
    }
);



export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchPopularMovies.pending, (state)=>{
            state.popularMovies.status = "loading"
        })
        .addCase(fetchPopularMovies.fulfilled, (state, action)=>{
            state.popularMovies.status = "success";
            state.popularMovies.data = action.payload;
        })
        .addCase(fetchPopularMovies.rejected, (state, action)=>{
            state.popularMovies.status = "failed";
            state.popularMovies.error = action.error;
        })         
    }
})

export const popularMoviesSelector = (state)=>state.movie.popularMovies;

export default movieSlice.reducer;