import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const apiGetUsers = () =>
    axiosInstance.get(URL_API.ALL_USERS);