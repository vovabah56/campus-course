import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Root} from "./components/root.jsx";
import {ROUTES} from "./helper/router.js";
import Registration from "./components/account/registration/RegistrationPage.jsx";

import {Provider} from "react-redux";
import {store} from "./store/index.ts";
import LoginPage from "./components/pages/LoginPage.jsx";
import Profile from "./components/pages/ProfilePage.jsx";
import Groups from "./components/groups/groupsList/index.jsx";
import GroupPage from "./components/pages/GroupPage.jsx";
import MyCourses from "./components/pages/MyCourses.jsx";



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
                element: <Groups/>,

            },

            {
                path: ROUTES.GROUP,
                element: <GroupPage/>
            },
            {
                path: ROUTES.MY_COURSES,
                element: <MyCourses/>
            },
            {
                path: ROUTES.TEACHING,
                element: <MyCourses/>
            },

            {
                path: ROUTES.REGISTER,
                element: <Registration />,
            },
            {
                path: ROUTES.PROFILE,
                element: <Profile />,
            },
        ],
    },
]);



export const App = () => (
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);