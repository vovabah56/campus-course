import { Button, DatePicker, Form, Input, message } from "antd";
import { registerFormValidation } from "../helper/validation.js";
import { signup } from "../store/authActions.js";
import { useAppDispatch, useAppSelector } from "../../../store/index.ts";
import {history} from "../../../helper/history.js";

export const RegisterForm = () => {
    const loading = useAppSelector((state) => state.loading.auth.signup);
    const dispatch = useAppDispatch();

    const [form] = Form.useForm();

    const onFinish = (values) => {
        const newValues = {
            ...values,
            birthDate: values["birthDate"].format("YYYY-MM-DD"),
        };
        dispatch(signup(newValues))
            .unwrap()
            .then(() => {
                if (history.navigate) {
                    history.navigate("/groups");
                    window.location.href = "/";
                }
            })
            .catch((e) => {
                onFinishFailed(e.message);
            });
    };

    const onFinishFailed = (value) => {
        if (value) message.error(value);
    };

    return (
        <Form layout="vertical" className={""} form={form} onFinish={onFinish} autoComplete="off">
            <Form.Item
                label="ФИО"
                name="fullName"
                rules={registerFormValidation.fullName}
            >
                <Input type="text" size="large" />
            </Form.Item>
            <Form.Item
                label="Дата рождения"
                name="birthDate"
                rules={registerFormValidation.birthDate}
            >
                <DatePicker format="MM.DD.YYYY" size="large" className="w-full" />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={registerFormValidation.email}
            >
                <Input size="large" />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={registerFormValidation.password}
            >
                <Input.Password size="large" />
            </Form.Item>
            <Form.Item
                label="Повторите пароль"
                name="confirmPassword"
                dependencies={["password"]}
                rules={registerFormValidation.confirm}
            >
                <Input.Password size="large" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" size="large" loading={loading}>
                    Зарегистрироваться
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;

