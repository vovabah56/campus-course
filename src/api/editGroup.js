
import { URL_API } from "../helper/urlApi.js";
import { axiosInstance } from "../helper/instance.js"

export const axiosEditGroup = async (id, data) => {


    console.log(data);
    try {
        await axiosInstance.put(URL_API.GROUP_BY_ID(id), data);
        window.location.reload()
    } catch (error) {
        console.error("Error during registration:", error);
        return (`Registration failed: ${error.response.data.Message}`);
    }
};