import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './login/loginSlice';
import getAllUserSlice from './user/getAllUserSlice';
import getCurrentUserSlice from './user/getCurrentUserSlice';
import deleteUserSlice from './user/deleteUserSlice';
export const store = configureStore({
    reducer: {
        login: loginSlice,
        users: getAllUserSlice,
        currentUser: getCurrentUserSlice,
        deleteUser: deleteUserSlice
    }
});