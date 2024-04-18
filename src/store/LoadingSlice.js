import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import * as groupsActions from "../components/groups/store/groupsAction.js";
import * as accountActions from "../components/account/store/accountActions.js";
import * as authActions from "../components/account/store/authActions.js";
import * as courseActions from "../components/courses/store/courseActions.js";

const initialState = {
    getData: {
        getCourseDetails: false,
        getGroups: false,
        getCourses: false,
        getTeachingCourses: false,
        getStudingCourses: false,
        getProfile: false,
        getRoles: false,
    },
    auth: {
        login: false,
        signup: false,
    },
    course: {
        create: false,
        delete: false,
        edit: false,
        editShort:false,
        changeStatus: false,
        addTeacher: false,
        addNotification: false,
        changeStudentStatus: false,
        changeStudentMark: false,
        signup: false,
    },
    account: {
        editProfile: false,
    },
    groups: {
        create: false,
        update: false,
        delete: false,
    },
};

const loadingSlice = createSlice({
    initialState,
    name: "loading",
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            isAnyOf(authActions.login.pending, authActions.signup.pending),
            (state, action) => {
                const key = action.type.split("/")[1];
                state.auth[key] = true;
            }
        ),
            builder.addMatcher(
                isAnyOf(authActions.login.fulfilled, authActions.signup.fulfilled),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.auth[key] = false;
                }
            ),
            builder.addMatcher(
                isAnyOf(authActions.login.rejected, authActions.signup.rejected),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.auth[key] = false;
                }
            );

        builder.addMatcher(
            isAnyOf(
                courseActions.createCourse.pending,
                courseActions.deleteCourse.pending,
                courseActions.editCourse.pending,
                courseActions.editCourseShort.pending,
                courseActions.changeCourseStatus.pending,
                courseActions.addTeacherToCourse.pending,
                courseActions.addNotificationToCourse.pending,
                courseActions.changeStudentStatus.pending,
                courseActions.changeStudentMark.pending,
                courseActions.signUpForCourse.pending
            ),
            (state, action) => {
                const key = action.type.split("/")[1];
                state.course[key] = true;
            }
        ),
            builder.addMatcher(
                isAnyOf(
                    courseActions.createCourse.fulfilled,
                    courseActions.deleteCourse.fulfilled,
                    courseActions.editCourse.fulfilled,
                    courseActions.editCourseShort.fulfilled,
                    courseActions.changeCourseStatus.fulfilled,
                    courseActions.addTeacherToCourse.fulfilled,
                    courseActions.addNotificationToCourse.fulfilled,
                    courseActions.changeStudentStatus.fulfilled,
                    courseActions.changeStudentMark.fulfilled,
                    courseActions.signUpForCourse.fulfilled
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.course[key] = false;
                }
            ),
            builder.addMatcher(
                isAnyOf(
                    courseActions.createCourse.rejected,
                    courseActions.deleteCourse.rejected,
                    courseActions.editCourse.rejected,
                    courseActions.editCourseShort.rejected,
                    courseActions.changeCourseStatus.rejected,
                    courseActions.addTeacherToCourse.rejected,
                    courseActions.addNotificationToCourse.rejected,
                    courseActions.changeStudentStatus.rejected,
                    courseActions.changeStudentMark.rejected,
                    courseActions.signUpForCourse.rejected
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.course[key] = false;
                }
            );

        builder.addMatcher(
            isAnyOf(accountActions.editProfile.pending),
            (state, action) => {
                const key = action.type.split("/")[1];
                state.account[key] = true;
            }
        ),
            builder.addMatcher(
                isAnyOf(accountActions.editProfile.fulfilled),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.account[key] = false;
                }
            ),
            builder.addMatcher(
                isAnyOf(accountActions.editProfile.rejected),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.account[key] = false;
                }
            );

        builder.addMatcher(
            isAnyOf(
                groupsActions.createGroup.pending,
                groupsActions.deleteGroup.pending,
                groupsActions.updateGroup.pending
            ),
            (state, action) => {
                const key = action.type.split("/")[1];
                state.groups[key] = true;
            }
        ),
            builder.addMatcher(
                isAnyOf(
                    groupsActions.createGroup.fulfilled,
                    groupsActions.deleteGroup.fulfilled,
                    groupsActions.updateGroup.fulfilled
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.groups[key] = false;
                }
            ),
            builder.addMatcher(
                isAnyOf(
                    groupsActions.createGroup.rejected,
                    groupsActions.deleteGroup.rejected,
                    groupsActions.updateGroup.rejected
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.groups[key] = false;
                }
            );

        builder.addMatcher(
            isAnyOf(
                courseActions.getCourseDetails.pending,
                groupsActions.getGroups.pending,
                groupsActions.getCourses.pending,
                accountActions.getTeachingCourses.pending,
                accountActions.getStudingCourses.pending,
                accountActions.getProfile.pending,
                accountActions.getRoles.pending
            ),
            (state, action) => {
                const key = action.type.split("/")[1];
                state.getData[key] = true;
            }
        ),
            builder.addMatcher(
                isAnyOf(
                    courseActions.getCourseDetails.fulfilled,
                    groupsActions.getGroups.fulfilled,
                    groupsActions.getCourses.fulfilled,
                    accountActions.getTeachingCourses.fulfilled,
                    accountActions.getStudingCourses.fulfilled,
                    accountActions.getProfile.fulfilled,
                    accountActions.getRoles.fulfilled
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.getData[key] = false;
                }
            ),
            builder.addMatcher(
                isAnyOf(
                    courseActions.getCourseDetails.rejected,
                    groupsActions.getGroups.rejected,
                    groupsActions.getCourses.rejected,
                    accountActions.getTeachingCourses.rejected,
                    accountActions.getStudingCourses.rejected,
                    accountActions.getProfile.rejected,
                    accountActions.getRoles.rejected
                ),
                (state, action) => {
                    const key = action.type.split("/")[1];
                    state.getData[key] = false;
                }
            );
    },
});

export const {reducer: loadingReducer, actions: loadingActions} = loadingSlice;
