import axios from 'axios';
import { store } from "../store/index.ts";
import { authActions} from '../components/account/store/authSlice.js';
import {URL_API} from "./urlApi.js";
import {history} from "./history.js";

const urlsSkipAuth = [URL_API.LOGOUT_URL, URL_API.REGISTER_URL];

export const axiosInstance = axios.create({ baseURL: URL_API.BASE_URL });

axiosInstance.interceptors.request.use(
    (config) => {
        if (config.url && urlsSkipAuth.includes(config.url)) {
            return config;
        }

        const token = store.getState().auth.token;

        if (token) {
            const authorization = `Bearer ${token}`;

            config.headers = {
                ...config.headers,
                authorization,
            };
        }

        return config;
    }
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        const isLoggedIn = !!store.getState().auth.token;

        if (error.response?.status === 401) {
            if (isLoggedIn) {
                store.dispatch(authActions.clearState());
            }
            history.navigate("/login")
            error.message = 'Необходима повторная авторизация';
        }

        throw error;
    }
);
