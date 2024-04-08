import { createSlice } from "@reduxjs/toolkit";
import {createGroup, deleteGroup, getCourses, getGroups, updateGroup} from "./groupsAction.js";

const initialState = {
    allGroups: [],
    currentGroupCourses: [],
    error: null,
};

const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        addCourse(state, action) {
            state.currentGroupCourses = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getGroups.fulfilled, (state, action) => {
            state.allGroups = action.payload;
        });

        builder.addCase(createGroup.fulfilled, (state, action) => {
            state.allGroups.push(action.payload);
        });

        builder.addCase(updateGroup.fulfilled, (state, action) => {
            let updatedGroup = state.allGroups.find(
                (group) => group.id === action.payload.id
            );
            updatedGroup = {
                ...updatedGroup,
                ...action.payload,
            };
            state.allGroups = state.allGroups.map((group) =>
                group.id === action.payload.id ? updatedGroup : group
            );
        });

        builder.addCase(deleteGroup.fulfilled, (state, action) => {
            state.allGroups = state.allGroups.filter((group) => group.id !== action.payload);
        });

        builder.addCase(getCourses.fulfilled, (state, action) => {
            state.currentGroupCourses = action.payload;
            state.error = null;
        });

        builder.addCase(getCourses.pending, (state) => {
            state.error = null;
        });

        builder.addCase(getCourses.rejected, (state, action) => {
            state.error = action.payload?.message;
        });
    },
});

export const { reducer: groupsReducer, actions: groupsActions } = groupsSlice;
