import AuthContent from "../account/helper/AuthContent.jsx";
import RegisterForm from "../account/registration/RegisterForm.jsx";

const Registration = () => {
    return (
        <AuthContent title="Регистрация нового пользователя">
            <RegisterForm />
        </AuthContent>
    );
};

export default Registration;
