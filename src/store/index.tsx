import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../../src/views/login/loginSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice
    }
});