import {axiosInstance} from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";


export function deleteGroupById(idGroup) {
    return axiosInstance.delete(URL_API.GROUP_BY_ID(idGroup));
}