import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IForm } from "../../interface/login";
import { LOGIN_ROUTE } from "../../services/api";
import { IInitialState } from "../../interface/login";

export const initialState: IInitialState = {
    loading: false,
    message: {},
    error: ""
};

export const loginAPI = createAsyncThunk("login", (obj: IForm) => {
    axios.post(LOGIN_ROUTE, obj).then((response: any) => {
        return response;
    }).catch()
});
export const loginSlice: any = createSlice({
    name: "user login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAPI.pending, (state) => {
            state.loading = true;
            state.message = {};
            state.error = "";
        });
        builder.addCase(loginAPI.fulfilled, (state, action: any) => {
            state.loading = false;
            state.message = action.payload;
            state.error = "";
        });
        builder.addCase(loginAPI.rejected, (state, action: any) => {
            state.loading = false;
            state.message = {};
            state.error = action.error;
        });
    }
});

export default loginSlice.reducer;