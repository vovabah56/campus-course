import { axiosInstance } from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";
export const useGetGroups =  () =>
    axiosInstance.get(URL_API.GROUPS);