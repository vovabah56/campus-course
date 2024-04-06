import { createAsyncThunk } from "@reduxjs/toolkit";
import {useGetGroups} from "../../../api/getGroups.js";
import {axiosEditGroup} from "../../../api/editGroup.js";

export const getGroups = createAsyncThunk("groups/getGroups", async () => {
    const response = useGetGroups();
    return response.data;
});


export const updateGroup = createAsyncThunk(
    "groups/update",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axiosEditGroup(payload.id, payload.data);
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


