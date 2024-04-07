import { useEffect, useState } from "react";
import { axiosInstance } from "../helper/instance.js";

export const useGetApi = (defaultValue, url) => {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const params = window.location.search

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axiosInstance.get(url + params);
                setData(response.data);
                setLoading(false)
            } catch {
                setLoading(false)
                setData(defaultValue);
                setError(true)
            }
        }

        fetchProfile();
    }, []);

    return [data, loading, error];
}