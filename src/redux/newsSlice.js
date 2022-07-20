import { createSlice } from "@reduxjs/toolkit";
import news from "../Data/news.json"

const initialState = {
    news: news
};

const newsSlice = createSlice({
    name: 'news',
    initialState
});

export const newsReducer = newsSlice.reducer;

export const newsSelector = state => state.news; 

