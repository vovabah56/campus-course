import { createSlice } from "@reduxjs/toolkit";

import {
    getEmail,
    getToken,
    resetEmail,
    resetToken,
} from "../helper/localStorage.js";
import { login, signup } from "./authActions";

const initialState = {
    token: getToken(),
    email: getEmail(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearState: () => {
            resetToken();
            resetEmail();
            return {
                token: getToken(),
                email: getEmail(),
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signup.fulfilled, (state) => {
            state.token = getToken();
            state.email = getEmail();
        });

        builder.addCase(login.fulfilled, (state) => {
            state.token = getToken();
            state.email = getEmail();
        });
    },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
