import { createSlice } from "@reduxjs/toolkit";
import {getUsers} from "./userActions.js";

const initialState = {
    allUsers: [],
    status: "init",
    error: null,
};

const usersSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getUsers
        builder.addCase(getUsers.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });

        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.status = "success";
            state.allUsers = action.payload;
        });

        builder.addCase(getUsers.rejected, (state, action) => {
            state.status = "error";
            state.error = action.payload?.message;
        });
    },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;
