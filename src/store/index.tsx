import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './login/loginSlice';
import getAllUserSlice from './user/getAllUserSlice';
import getCurrentUserSlice from './user/getCurrentUserSlice';

export const store = configureStore({
    reducer: {
        login: loginSlice,
        users: getAllUserSlice,
        currentUser: getCurrentUserSlice
    }
});