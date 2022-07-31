import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IForm } from "../../interface/login";
import { LOGIN_ROUTE } from "../../services/api";
import { IInitialState, IState } from "../../interface/login";

export const initialState: IInitialState = {
    loading: false,
    responseData: {},
    error: ""
};

export const loginAPI = createAsyncThunk("login", (obj: IForm) => {
    return axios.post(LOGIN_ROUTE, obj).then((response) => {
        if (response?.data?.message === "success") {
            localStorage.setItem('user', JSON.stringify(response.data.data));
        }
        return response.data;
    }).catch((error) => {
        return error
    })
});
export const loginSlice: any = createSlice({
    name: "user login",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginAPI.pending, (state) => {
            state.loading = true;
            state.responseData = {};
            state.error = "";
        });
        builder.addCase(loginAPI.fulfilled, (state, action) => {
            state.loading = false;
            state.responseData = action.payload;
            state.error = "";
        });
        builder.addCase(loginAPI.rejected, (state, action: any) => {
            state.loading = false;
            state.responseData = {};
            state.error = action.error;
        });
    }
});
export const loginStatus = (state: IState) => state?.login?.loading;
export const loginError = (state: IState) => state?.login?.error;
export const loginUser = (state: IState) => state?.login?.responseData;
export default loginSlice.reducer;