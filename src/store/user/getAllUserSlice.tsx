import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/AxiosInterceptor';
import { GET_USERS } from '../../services/api/index';
import { IInitialState } from '../../interface/user';

export const initialState: IInitialState = {
    loading: false,
    userData: {},
    error: ""
};

export const fetchUsers: any = createAsyncThunk("users", () => {
    return axiosInterceptor(GET_USERS).then((response) => {
        if (response?.status === 200) {
            return response.data;
        }
    }).catch((error) => {
        return error
    })
});

export const getAllUserSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.userData = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error
        });
    }
});

export const userLoading = (state: any) => state.users.loading;
export const usersData = (state: any) => state.users.userData;
export default getAllUserSlice.reducer; 