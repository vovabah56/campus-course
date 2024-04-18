import * as CourseActions from "./courseActions";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    idCourse: "",
    courseInfo: {},
    courseDescription: {},
    allStudents: [],
    allTeachers: [],
    allNotifications: [],
    error: null,
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            CourseActions.getCourseDetails.fulfilled,
            (state, { payload }) => {
                const {
                    requirements,
                    annotations,
                    students,
                    teachers,
                    notifications,
                    id,
                    ...info
                } = payload;
                console.log(info)
                state.idCourse = id;
                state.courseInfo = info;
                state.courseDescription = {
                    ...payload
                };
                state.allStudents = students;
                state.allTeachers = teachers;
                state.allNotifications = notifications;

                state.error = null;
            }
        );

        builder.addCase(CourseActions.getCourseDetails.pending, (state) => {
            state.error = null;
        });

        builder.addCase(
            CourseActions.getCourseDetails.rejected,
            (state, { payload }) => {
                state.error = payload?.message;
            }
        );

        builder.addCase(
            CourseActions.editCourse.fulfilled,
            (state, { payload }) => {
                state.courseDescription = payload;
            }
        );

        builder.addCase(CourseActions.deleteCourse.fulfilled, () => {
            return initialState;
        });

        builder.addCase(
            CourseActions.changeCourseStatus.fulfilled,
            (state, { payload }) => {
                if (state.courseInfo) state.courseInfo.status = payload;
            }
        );

        builder.addCase(
            CourseActions.addTeacherToCourse.fulfilled,
            (state, { payload }) => {
                state.allTeachers = payload;
            }
        );

        builder.addCase(
            CourseActions.addNotificationToCourse.fulfilled,
            (state, { payload }) => {
                state.allNotifications.push(payload);
            }
        );

        builder.addCase(
            CourseActions.changeStudentStatus.fulfilled,
            (state, { payload }) => {
                const student = state.allStudents.find(
                    (student) => student.id === payload.idStudent
                );
                if (student) student.status = payload.data.status;
            }
        );

        builder.addCase(
            CourseActions.changeStudentMark.fulfilled,
            (state, { payload }) => {
                const student = state.allStudents.find(
                    (student) => student.id === payload.idStudent
                );

                const key = (payload.data.markType.toLowerCase() +
                    "Result");

                if (student) student[key] = payload.data.mark;
            }
        );
    },
});

export const coursesReducer = coursesSlice.reducer;
