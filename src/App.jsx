import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Root} from "./components/root.jsx";
import {ROUTES} from "./helper/router.js";
import LoginPage from "./components/account/login/Login.jsx";
import Registration from "./components/account/registration/RegistrationPage.jsx";
import ProfilePage from "./components/account/profile/ProfilePage.jsx";
import GroupsList from "./components/groups/groupsList/GroupsList.jsx";
import {Provider} from "react-redux";
import {store} from "./store/index.ts";



const router = createBrowserRouter([
    {
        path:  ROUTES.ROOT,
        element: <Root />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <LoginPage />,
            },
            {
                path: ROUTES.GROUPS,
                element: <GroupsList/>
            },
            {
                path: ROUTES.REGISTER,
                element: <Registration />,
            },
            {
                path: ROUTES.PROFILE,
                element: <ProfilePage />,
            },
        ],
    },

]);


export const App = () => (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);