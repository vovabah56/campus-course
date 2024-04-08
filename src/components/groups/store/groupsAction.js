import { createAsyncThunk } from "@reduxjs/toolkit";
import {useGetGroups} from "../../../api/getGroups.js";
import {axiosEditGroup} from "../../../api/editGroup.js";
import {deleteGroupById} from "../../../api/deleteGroup.js";
import * as api from "../../../api/groups.js"
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
export const createGroup = createAsyncThunk(
    "groups/create",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.createGroup(data);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Возникла ошибка при создании" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);
export const deleteGroup = createAsyncThunk(
    "groups/delete",
    async (id, { rejectWithValue }) => {
        try {
            await deleteGroupById(id);
            return id;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно удалить" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);


export const getCourses = createAsyncThunk(
    "groups/getCourses",
    async (idGroup, { rejectWithValue }) => {
        try {
            const response = await api.getCoursesInGroup(idGroup);
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