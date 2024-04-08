import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const getRoles = () =>
    axiosInstance.get(URL_API.ROLES);