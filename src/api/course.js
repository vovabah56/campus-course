import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const deleteCourse = (idCourse) =>
    axiosInstance.delete(URL_API.COURSE_BY_ID(idCourse));

export const createCourse = (
    idGroup,
    data
) =>
    axiosInstance.post(URL_API.COURSE_IN_GROUP(idGroup), data);

export const editCourse = (
    idCourse,
    data
)=>
    axiosInstance.put(URL_API.COURSE_BY_ID(idCourse), data);

export const getCourseDetails = (
    idCourse
)=>
    axiosInstance.get(URL_API.DETAILS(idCourse));

export const changeCourseStatus = (
    idCourse,
    data
) =>
    axiosInstance.post(URL_API.STATUS(idCourse), data);

export const addTeacherToCourse = (
    idCourse,
    data
)=>
    axiosInstance.post(URL_API.TEACHERS(idCourse), data);

export const addNotificationToCourse = (
    idCourse,
    data
) =>
    axiosInstance.post(URL_API.NOTIFICATIONS(idCourse), data);

export const changeStudentStatus = (
    idCourse,
    idStudent,
    data
)=>
    axiosInstance.post(URL_API.STUDENT_STATUS(idCourse, idStudent), data);

export const changeStudentMark = (
    idCourse,
    idStudent,
    data
) =>
    axiosInstance.post(URL_API.STUDENT_MARK(idCourse, idStudent), data);

export const signUpForCourse = (idCourse) =>
    axiosInstance.post(URL_API.SIGN_UP(idCourse));
