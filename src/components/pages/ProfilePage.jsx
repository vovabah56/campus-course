import React, { useEffect } from "react";


import { useDispatch } from "react-redux";
import {getProfile} from "../account/store/accountActions.js";
import ProfileForm from "../account/profile/ProfileForm.jsx";
import DataContent from "../groups/Components/DataContent.jsx"; // Используем useDispatch из библиотеки react-redux

const Profile = () => {
    const dispatch = useDispatch(); // Используем useDispatch для получения диспетчера Redux

    useEffect(() => {
        dispatch(getProfile()); // Диспетчер Redux вызывает функцию getProfile для получения профиля
    }, [dispatch]); // Зависимость - изменение диспетчера

    return (

        <DataContent title="Профиль">
            <ProfileForm />
        </DataContent>
    );
};

export default Profile;
