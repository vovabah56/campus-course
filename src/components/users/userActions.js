import { createAsyncThunk } from "@reduxjs/toolkit";
import {apiGetUsers} from "../../api/getUsers.js";

export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await apiGetUsers();
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
