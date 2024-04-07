import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../../api/auth/register/auth.js"

export const getRoles = createAsyncThunk("account/getRoles", async () => {
    const response = await api.getRoles();
    return response.data;
});

export const getProfile = createAsyncThunk("account/getProfile", async () => {
    const response = await api.getProfile();
    return response.data;
});

export const editProfile = createAsyncThunk(
    "account/editProfile",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.editProfile(data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно отредактировать" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const getStudingCourses = createAsyncThunk(
    "account/getStudingCourses",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getStudingCourses();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: error.response.data.message });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const getTeachingCourses = createAsyncThunk(
    "account/getTeachingCourses",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.getTeachingCourses();
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: error.response.data.message });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);
