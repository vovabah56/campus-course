import { Layout, Menu } from "antd";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/index.ts";
import styles from "../../style/header.module.scss";

import {Roles} from "../../helper/Roles.js";
import {authActions} from "../account/store/authSlice.js";
import RequireAuthComponent from "../RequireAuthComponent.jsx";
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
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                        >
                            Группы курсов
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="2" >
                    <RequireAuthComponent allowedRoles={[Roles.isStudent]}>
                        <NavLink
                            to="/courses/my"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }

                        >
                            Мои курсы
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="3">
                    <RequireAuthComponent allowedRoles={[Roles.isTeacher]}>
                        <NavLink
                            to="/courses/teaching"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                        >
                            Преподаваемые курсы
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="4" className={`linkWrapper lastInLeftCol`}>
                    <RequireAuthComponent loggedOut>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                        >
                            Регистрация
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="5" >
                    <RequireAuthComponent loggedOut>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                        >
                            Вход
                        </NavLink>
                    </RequireAuthComponent>
                </Menu.Item>

                <Menu.Item key="6" >
                    <RequireAuthComponent>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
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
