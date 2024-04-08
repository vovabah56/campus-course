import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";


export const getGroups = () =>
    axiosInstance.get(URL_API.GROUPS);

export const createGroup = (
    data
) =>
    axiosInstance.post(URL_API.GROUPS, data);

export const updateGroup = (
    idGroup,
    data
) =>
    axiosInstance.put(URL_API.GROUP_BY_ID(idGroup), data);

export const deleteGroup = (idGroup)=>
    axiosInstance.delete(URL_API.GROUP_BY_ID(idGroup));

export const getCoursesInGroup = (
    idGroup
) =>
    axiosInstance.get(URL_API.GROUP_BY_ID(idGroup));
