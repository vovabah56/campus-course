import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { history } from "../../../helper/history.js";
import {useAppDispatch} from "../../../store/index.ts";
import {login} from "../store/authActions.js";
import {loginFormValidation} from "../helper/validation.js";

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    const onFinish = (values) => {
        setLoading(true);
        dispatch(login(values))
            .unwrap()
            .then(() => history.navigate && history.navigate("/"))
            .catch((e) => {
                onFinishFailed(e.message);
            })
            .finally(() => setLoading(false));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    return (
        <Form layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={loginFormValidation.email}>
                <Input
                    prefix={<UserOutlined className="site-form-item-icon text-gray-500" />}
                    size="large"
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={loginFormValidation.password}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon text-gray-500" />}
                    size="large"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" loading={loading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
