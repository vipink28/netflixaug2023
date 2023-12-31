import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../helper/axios';
import { endpoints, platforms, requests } from "../../helper/requests";

const initialState = {
    netflixOriginals:{
        data: null,
        status: "idle",
        error: null
    },
    popularShows:{
        data: null,
        status: "idle",
        error: null
    }   
}

export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async()=>{
        const response = await axios.get(requests.getNetflixOriginals);
        return response.data;
    }
);

export const fetchPopularShows = createAsyncThunk(
    'tv/fetchPopularShows',
    async()=>{
        const response = await axios.get(requests.getCollections(platforms.tv, endpoints.popular));
        return response.data;
    }
);




export const tvSlice = createSlice({
    name: 'tv',
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchNetflixOriginals.pending, (state)=>{
            state.netflixOriginals.status = "loading"
        })
        .addCase(fetchNetflixOriginals.fulfilled, (state, action)=>{
            state.netflixOriginals.status = "success";
            state.netflixOriginals.data = action.payload;
        })
        .addCase(fetchNetflixOriginals.rejected, (state, action)=>{
            state.netflixOriginals.status = "failed";
            state.netflixOriginals.error = action.error;
        })
        .addCase(fetchPopularShows.pending, (state)=>{
            state.popularShows.status = "loading"
        })
        .addCase(fetchPopularShows.fulfilled, (state, action)=>{
            state.popularShows.status = "success";
            state.popularShows.data = action.payload;
        })
        .addCase(fetchPopularShows.rejected, (state, action)=>{
            state.popularShows.status = "failed";
            state.popularShows.error = action.error;
        })        
    }
})

export const netflixOriginalSelector = (state)=>state.tv.netflixOriginals;
export const popularShowSelector = (state)=>state.tv.popularShows;

export default tvSlice.reducer;