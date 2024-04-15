import AuthContent from "../helper/AuthContent.jsx";
import RegisterForm from "./RegisterForm.jsx";
import React from "react";

const Registration = () => {
    return (
        <AuthContent title="Регистрация нового пользователя">
            <RegisterForm />
        </AuthContent>
    );
};

export default Registration;
