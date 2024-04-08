import { useEffect, useState } from "react";
import { axiosInstance } from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";
import {history} from "../helper/history.js";
export const useGetGroups =  (defaultValue) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosInstance.get(URL_API.GROUPS);
                setData(response.data);
                setLoading(false)

            } catch {
/*
                setLoading(false)
*/
                history.navigate("/login")
                setData(defaultValue);
/*
                setError(true)
*/
            }
        }

        fetchProfile();
    }, []);

    return [data, loading, error];
}