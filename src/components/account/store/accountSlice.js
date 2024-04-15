import { createSlice } from "@reduxjs/toolkit";
import {editProfile, getProfile, getRoles, getStudingCourses, getTeachingCourses} from "./accountActions.js";
import {Roles} from "../../../helper/Roles.js";


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
            state.roles = convertRolesResponeToArray(action.payload);
        });

        builder.addCase(getProfile.fulfilled, (state, action) => {
            console.log(action.payload)
            state.profile = action.payload;
        });

        builder.addCase(editProfile.fulfilled, (state, action) => {
            state.profile = action.payload;
        });

        builder.addCase(getStudingCourses.fulfilled, (state, action) => {
            console.log(action)
            state.studingCourses = action.payload;
        });

        builder.addCase(getTeachingCourses.fulfilled, (state, action) => {
            state.teachingCourses = action.payload;
        });
    },
});


function convertRolesResponeToArray(response) {
    const roles = [];

    for (const key in response) {
        if (response[key]) {
            roles.push(Roles[key]);
        }
    }
    return roles;
}

const accountReducer = accountSlice.reducer;
const accountActions = accountSlice.actions;

export { accountReducer, accountActions };
