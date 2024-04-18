import { Layout, Menu } from "antd";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/index.ts";

import {Roles} from "../../helper/Roles.js";
import {authActions} from "../account/store/authSlice.js";
import RequireAuthComponent from "../helperComponents/RequireAuthComponent.jsx";
import {logout} from "../account/store/authActions.js";

const { Header: AntHeader } = Layout;

const Header = () => {
    const email = useAppSelector((state) => state.auth.email);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const handleLogout = () => {
            dispatch(authActions.logout());
        };

        return () => {
            document.removeEventListener("click", handleLogout);
        };
    }, [dispatch]);

    return (
        <AntHeader  className={"navbar"}>
            <NavLink to="/" className={"logo"}>
                Кампусные курсы
            </NavLink>
            <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item key="1">
                    <RequireAuthComponent>
                        <NavLink
                            to="/groups"

                        >
                            Группы курсов
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="2" >
                    <RequireAuthComponent allowedRoles={[Roles.isStudent]}>
                        <NavLink
                            to="/courses/my"


                        >
                            Мои курсы
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="3">
                    <RequireAuthComponent allowedRoles={[Roles.isTeacher]}>
                        <NavLink
                            to="/courses/teaching"

                        >
                            Преподаваемые курсы
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="4" className={`linkWrapper lastInLeftCol`}>
                    <RequireAuthComponent loggedOut>
                        <NavLink
                            to="/register"

                        >
                            Регистрация
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="5" >
                    <RequireAuthComponent loggedOut>
                        <NavLink
                            to="/login"

                        >
                            Вход
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="6" >
                    <RequireAuthComponent>
                        <NavLink
                            to="/profile"
                        >
                            {email && email}
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="7" >
                    <RequireAuthComponent>
                        <div
                            aria-hidden="true"
                            onClick={() => dispatch(logout())}
                        >
                            Выход
                        </div>
                    </RequireAuthComponent>
                </Menu.Item>
            </Menu>
        </AntHeader>
    );
};

export default Header;
