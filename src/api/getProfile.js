import { axiosInstance } from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const useGetApi = () =>
    axiosInstance.get(URL_API.PROFILE);


