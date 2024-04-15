/* eslint-disable react-hooks/exhaustive-deps */
import { FloatButton, Layout } from "antd";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/header/Header.jsx";
import useAuth from "../hooks/useAuth.js";

import { getRoles } from "./account/store/accountActions.js";

import { history } from "../helper/history.js";
import { useAppDispatch } from "../store";

export const Root = () => {
    const { isLoggedIn } = useAuth();
    const dispatch = useAppDispatch();

    history.navigate = useNavigate();
    history.location = useLocation();

    useEffect(() => {
        if (isLoggedIn) {
            dispatch(getRoles());
        }
    }, [isLoggedIn, dispatch]);

    return (
        <Layout className="min-h-full">
            <Header />
            <Outlet />
            <FloatButton.BackTop />
        </Layout>
    );
};

