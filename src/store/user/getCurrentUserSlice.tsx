import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInterceptor from '../../utils/AxiosInterceptor';
import { GET_USERS } from '../../services/api/index';
import { IInitialStateCurrentUser, IState } from "../../interface/user";

const initialState: IInitialStateCurrentUser = {
    loading: false,
    currentUser: {},
    error: ""
};

export const fetchCurrentUser: any = createAsyncThunk("user/current-user", (id: any) => {
    return axiosInterceptor(`${GET_USERS}/${id}`).then((response) => {
        return response?.status === 200 && response.data;
    }).catch()
});
export const getCurrentUserSlice = createSlice({
    name: "currentUser",
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
export const currentUserLoading = (state: IState) => state?.currentUser?.loading;
export const currentUser = (state: IState) => state?.currentUser?.currentUser;
export default getCurrentUserSlice.reducer;