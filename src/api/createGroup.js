import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const createGroup = (
    data) =>
    axiosInstance.post(URL_API.GROUPS, data);