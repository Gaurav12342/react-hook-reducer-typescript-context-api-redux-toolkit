import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInterceptor from '../../utils/AxiosInterceptor';
import { GET_USERS } from '../../services/api/index';
import { IDeleteUserInitialState, IState } from "../../interface/user";

const initialState: IDeleteUserInitialState = {
    loading: false,
    deleteUser: {},
    error: ""
};

export const deletePerticularUser: any = createAsyncThunk("user/delete", (id) => {
    return axiosInterceptor.delete(`${GET_USERS}/${id}`).then((response) => {
        return response?.status === 200 && response
    }).catch((error) => {
        return error
    })
});

export const deleteUserSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(deletePerticularUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deletePerticularUser.fulfilled, (state, action) => {
            state.loading = false;
            state.deleteUser = action.payload;

        });
        builder.addCase(deletePerticularUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
    }
});

export const deleteLoading = (state: IState) => state?.deleteUser?.loading;
export const deleteUserSuccess = (state: IState) => state?.deleteUser?.deleteUser;
export default deleteUserSlice.reducer;