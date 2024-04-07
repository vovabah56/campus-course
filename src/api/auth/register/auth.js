import { URL_API } from "../../../helper/urlApi.js";
import { axiosInstance } from "../../../helper/instance.js";

const registr = (data) => axiosInstance.post(URL_API.REGISTER_URL, data);

const login = (data) => axiosInstance.post(URL_API.LOGIN_URL, data);

const logout = () => axiosInstance.post(URL_API.LOGOUT_URL);

export { registr, login, logout };
