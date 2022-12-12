import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const NAMESPACE = '_TOTANGA_BOOK_APP';

const theme = createSlice({
    name: 'theme',
    initialState: {
        value: 'automatic' || 'dark' || 'light',
    },
    reducers: {
        switchTheme (state, action) {
            state.value = action.payload || 'automatic';
        }
    }
});

export const { switchTheme } = theme.actions;
export default persistReducer({
    storage,
    key: NAMESPACE
}, theme.reducer);