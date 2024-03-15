import { Outlet } from 'react-router';
import Header from "./header/Header.jsx";


export const Root = () => {
    console.log(localStorage.getItem('token'));
    console.log(localStorage.getItem('token') != null)
    return (
        <>
            <Header isAuth = {localStorage.getItem('token') !== null} />
            <Outlet />
        </>
    );
}
