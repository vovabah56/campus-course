import { useEffect, useState } from "react";
import { api } from "../helper/instance.js";
import {URL_API} from "../helper/urlApi.js";

export const useGetGroups =  (defaultValue) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    console.log("sadasdasdasdasdasd")
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get(URL_API.GROUPS);
                setData(response.data);
                console.log(response)
                setLoading(false)

            } catch {
/*
                setLoading(false)
*/
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