import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../../api/course.js";
import {groupsActions} from "../../groups/store/groupsSlice.js";
import { getStudingCourses} from "../../account/store/accountActions.js";



export const getCourseDetails = createAsyncThunk(
    "courses/getCourseDetails",
    async (idCourse, { rejectWithValue }) => {
        try {
            const response = await api.getCourseDetails(idCourse);
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



export const createCourse = createAsyncThunk(
    "groups/create",
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.createCourse(payload.idGroup, payload.data);
            dispatch(groupsActions.addCourse(response.data));
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно создать" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const deleteCourse = createAsyncThunk(
    "courses/delete",
    async (idCourse, { rejectWithValue }) => {
        try {
            await api.deleteCourse(idCourse);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно удалить" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const editCourse = createAsyncThunk(
    "courses/edit",
    async (payload, { rejectWithValue }) => {
        try {
            await api.editCourse(payload.idCourse, payload.data);
            return payload.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно отредактировать" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const changeCourseStatus = createAsyncThunk(
    "courses/changeStatus",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await api.changeCourseStatus(
                payload.idCourse,
                payload.data
            );
            return response.data.status;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({
                    message: "Невозможно установить статус меньше текущего",
                });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const addTeacherToCourse = createAsyncThunk(
    "courses/addTeacher",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await api.addTeacherToCourse(
                payload.idCourse,
                payload.data
            );
            return response.data.teachers;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({
                    message:
                        "Этот пользователь уже является преподавателем или студентом",
                });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const addNotificationToCourse = createAsyncThunk(
    "courses/addNotification",
    async (payload, { rejectWithValue }) => {
        try {
            await api.addNotificationToCourse(payload.idCourse, payload.data);
            return payload.data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно создать уведомление" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);


export const changeStudentStatus = createAsyncThunk(
    "courses/changeStudentStatus",
    async (payload, { rejectWithValue }) => {
        try {
            await api.changeStudentStatus(
                payload.idCourse,
                payload.idStudent,
                payload.data
            );
            return {
                idStudent: payload.idStudent,
                data: payload.data,
            };
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({
                    message: "Количество учеников превышает максимальное",
                });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const changeStudentMark = createAsyncThunk(
    "courses/changeStudentMark",
    async (payload, { rejectWithValue }) => {
        try {
            await api.changeStudentMark(
                payload.idCourse,
                payload.idStudent,
                payload.data
            );
            return {
                idStudent: payload.idStudent,
                data: payload.data,
            };
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно установить отметку" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);

export const signUpForCourse = createAsyncThunk(
    "courses/signup",
    async (idCourse, { rejectWithValue, dispatch }) => {
        try {
            await api.signUpForCourse(idCourse);
            dispatch(getCourseDetails(idCourse));
            dispatch(getStudingCourses());
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue({ message: "Невозможно записаться на курс" });
            } else {
                return rejectWithValue({ message: "Ошибка соединения" });
            }
        }
    }
);
