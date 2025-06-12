import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import type { NewsItem } from "./types.ts";

interface NewsState {
    list: NewsItem[];
}

const initialState: NewsState = {
    list: [],
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addNews: (state, action: PayloadAction<Omit<NewsItem, 'id'>>) => {
            state.list.push({ id: uuidv4(), ...action.payload });
        },
        editNews: (state, action: PayloadAction<NewsItem>) => {
            const index = state.list.findIndex(n => n.id === action.payload.id);
            if (index !== -1) state.list[index] = action.payload;
        },
        deleteNews: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(n => n.id !== action.payload);
        },
    },
});

export const { addNews, editNews, deleteNews } = newsSlice.actions;
export const { reducer: newsSliceReducer } = newsSlice;

