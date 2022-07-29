import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInterceptor from '../../utils/AxiosInterceptor';
import { GET_USERS } from '../../services/api/index';

const initialState: any = {
    loading: false,
    currentUser: {},
    error: ""
};

export const fetchCurrentUser: any = createAsyncThunk("user/current-user", (id: any) => {
    debugger
    return axiosInterceptor(`${GET_USERS}/${id}`).then((response) => {
        return console.log("current response =>", response);
    }).catch()
});
export const getCurrentUserSlice = createSlice({
    name: "user/current-user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCurrentUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(fetchCurrentUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }
});

export default getCurrentUserSlice.reducer;