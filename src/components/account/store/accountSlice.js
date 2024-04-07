import { createSlice } from "@reduxjs/toolkit";
import {editProfile, getProfile, getRoles, getStudingCourses, getTeachingCourses} from "./accountActions.js";


const initialState = {
    roles: [],
    profile: {},
    studingCourses: [],
    teachingCourses: [],
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getRoles.fulfilled, (state, action) => {
            state.roles = action.payload;
        });

        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });

        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });

        builder.addCase(getStudingCourses.fulfilled, (state, action) => {
            state.studingCourses = action.payload;
        });

        builder.addCase(getTeachingCourses.fulfilled, (state, action) => {
            state.teachingCourses = action.payload;
        });
    },
});

const accountReducer = accountSlice.reducer;
const accountActions = accountSlice.actions;

export { accountReducer, accountActions };
