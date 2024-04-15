import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../../api/getRoles.js"
import * as api2 from "../../../api/account.js"
export const getRoles = createAsyncThunk("account/getRoles", async () => {
    const response = await api.getRoles();
    return response.data;
});

export const getProfile = createAsyncThunk("account/getProfile", async () => {
    const response = await api2.getProfile();
    console.log(response.data)
    return response.data;
});

export const editProfile = createAsyncThunk(
    "account/editProfile",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api2.editProfile(data);
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
            const response = await api2.getStudyingCourses();
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
            const response = await api2.getTeachingCourses();
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
