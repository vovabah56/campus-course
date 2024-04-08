import { getRoles } from "../components/account/store/accountSelectors.js";
import { useAppSelector } from "../store/index.ts";

const useAuth = () => {
    const { token, email } = useAppSelector((state) => state.auth);
    const roles = useAppSelector(getRoles);

    return {
        isLoggedIn: !!token,
        roles,
        token,
        email,
    };
};

export default useAuth;
