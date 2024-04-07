import {URL_API} from "../helper/urlApi.js";
import {axiosInstance} from "../helper/instance.js";


export const getRoles = () => axiosInstance.get(URL_API.ROLES);

export const getProfile = () => axiosInstance.get(URL_API.PROFILE);

export const editProfile = (data) => axiosInstance.put(URL_API.PROFILE, data);

export const getStudyingCourses = () => axiosInstance.get(URL_API.STUDYING_COURSES);

export const getTeachingCourses = () => axiosInstance.get(URL_API.TEACHING_COURSES);
