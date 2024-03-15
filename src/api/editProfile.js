
import { URL_API } from "../helper/urlApi.js";
import { api } from "../helper/instance.js"

export const axiosEditProfile = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    if (data["phone"] ==='') {
        data["phone"] = null;
    }

    console.log(data);

    try {
        await api.put(URL_API.PROFILE_URL, data);
        window.location.reload()
    } catch (error) {
        console.error("Error during registration:", error);
        return (`Registration failed: ${error.response.data.Message}`);
    }
};