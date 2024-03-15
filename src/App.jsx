import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {Root} from "./components/root.jsx";
import {ROUTES} from "./helper/router.js";
import LoginPage from "./components/account/login/Login.jsx";
import RegistrationPage from "./components/account/registration/RegistrationPage.jsx";
import ProfilePage from "./components/account/profile/ProfilePage.jsx";



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
                path: ROUTES.REGISTER,
                element: <RegistrationPage />,
            },
            {
                path: ROUTES.PROFILE,
                element: <ProfilePage />,
            },
        ],
    },

]);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});

export const App = () => (
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);