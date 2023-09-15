import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/requests";
const initialState = {
    headerVideos: {
        status: "idle",
        data: null,
        error: null
    },
    videoDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderVideos = createAsyncThunk(
    "common/fetchHeaderVideos",
    async (video) => {
        const response = await axios.get(requests.getVideoDetails(video));
        return response.data;
    }
)

export const fetchVideoDetails = createAsyncThunk(
    "common/fetchVideoDetails",
    async (video) => {
        const response = await axios.get(requests.getVideoDetails(video));
        return response.data;
    }
)

export const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderVideos.pending, (state) => {
                state.headerVideos.status = "loading"
            })
            .addCase(fetchHeaderVideos.fulfilled, (state, action) => {
                state.headerVideos.status = "success";
                state.headerVideos.data = action.payload;
            })
            .addCase(fetchHeaderVideos.rejected, (state, action) => {
                state.headerVideos.status = "failed";
                state.headerVideos.error = action.error;
            })
            .addCase(fetchVideoDetails.pending, (state) => {
                state.videoDetails.status = "loading"
            })
            .addCase(fetchVideoDetails.fulfilled, (state, action) => {
                state.videoDetails.status = "success";
                state.videoDetails.data = action.payload;
            })
            .addCase(fetchVideoDetails.rejected, (state, action) => {
                state.videoDetails.status = "failed";
                state.videoDetails.error = action.error;
            })
    }
})

export const headerVideosSelector = (state) => state.common.headerVideos;
export const videoDetailsSelector = (state) => state.common.videoDetails;


export default commonSlice.reducer;