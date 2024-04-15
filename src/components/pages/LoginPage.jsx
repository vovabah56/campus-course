import AuthContent from "../account/helper/AuthContent.jsx";
import LoginForm from "../account/login/Login.jsx";

const LoginPage = () => {
    return (
        <AuthContent title="Авторизация">
            <LoginForm />
        </AuthContent>
    );
};

export default LoginPage;
