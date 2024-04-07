import { createAsyncThunk } from "@reduxjs/toolkit";

import { setToken, setEmail } from "../helper/localStorage.js";
import { authActions } from "./authSlice";
import * as api from "../../../api/auth/register/auth.js"

const signup = createAsyncThunk(
    "auth/signup",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.registr(data);
            setToken(response.data.token);
            setEmail(data.email);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({
                    message: "Пользователь с таким email существует",
                });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

const login = createAsyncThunk(
    "auth/login",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.login(data);
            setToken(response.data.token);
            setEmail(data.email);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Неверный логин или пароль" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
    await api.logout();
    dispatch(authActions.clearState());
});

export { signup, login, logout };
