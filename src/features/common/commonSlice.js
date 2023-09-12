import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";
const initialState = {
    headerVideos:{
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderVideos = createAsyncThunk(
        "common/fetchHeaderVideos",
        async(video)=>{
            const response = await axios.get(requests.getVideoDetails(video));
            return response.data;
        }
    )

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchHeaderVideos.pending, (state)=>{
            state.headerVideos.status = "loading"
        })
        .addCase(fetchHeaderVideos.fulfilled, (state, action)=>{
            state.headerVideos.status = "success";
            state.headerVideos.data = action.payload;
        })
        .addCase(fetchHeaderVideos.rejected, (state, action)=>{
            state.headerVideos.status = "failed";
            state.headerVideos.error = action.error;
        })
    }
})

export const headerVideosSelector = (state)=>state.common.headerVideos;


export default commonSlice.reducer;