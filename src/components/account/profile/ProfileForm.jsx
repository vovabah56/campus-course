import { Button, DatePicker, Form, Input, message } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {editProfile} from "../store/accountActions.js";
import ContentLoader from "react-content-loader";
import {profileFormValidation} from "../helper/validation.js";
import {getProfile} from "../store/accountSelectors.js";



const ProfileForm = () => {
    const dispatch = useAppDispatch();
    const profileInfo = useAppSelector(getProfile);
    console.log(profileInfo)
    const loading = useAppSelector((state) => state.loading.account.editProfile);
    const fetcing = useAppSelector((state) => state.loading.getData.getProfile);

    const [isEdit, setEdit] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => form.resetFields(), [profileInfo]);

    const onFinish = (values) => {
        const newValues = {
            ...values,
            birthDate: values["birthDate"].format("YYYY-MM-DD"),
        };

        dispatch(editProfile(newValues))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => {
                onFinishFailed(e.message);
            });
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Профиль успешно отредактирован");
        setEdit(false);
    };

    const onEditClick = () => {
        setEdit(true);
    };

    const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 20 } };

    /*if (fetcing) return <ContentLoader
        rtl
        speed={2}
        width="100%"
        height="249"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="84%" y="0" rx="4" ry="8" width="16%" height="40" />
        <rect x="0" y="0" rx="8" ry="8" width="83%" height="40" />
        <rect x="84%" y="64" rx="4" ry="4" width="16%" height="40" />
        <rect x="0" y="64" rx="8" ry="8" width="83%" height="40" />
        <rect x="84%" y="128" rx="4" ry="4" width="16%" height="40" />
        <rect x="0" y="128" rx="8" ry="8" width="83%" height="40" />
        <rect x="0" y="192" rx="8" ry="8" width="104" height="40" />
    </ContentLoader>;*/

    return (
        <Form
            {...formItemLayout}
            layout="horizontal"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
                fullName: profileInfo.fullName,
                birthDate: dayjs(profileInfo.birthDate),
            }}
        >
            <Form.Item
                label="ФИО"
                name="fullName"
                labelAlign="left"
                rules={profileFormValidation.fullName}
            >
                <Input size="large" disabled={!isEdit} />
            </Form.Item>

            <Form.Item label="Email" labelAlign="left">
                <div>{profileInfo.email}</div>
            </Form.Item>

            <Form.Item
                label="Дата рождения"
                name="birthDate"
                labelAlign="left"
                rules={profileFormValidation.birthDate}
            >
                <DatePicker
                    format="DD.MM.YYYY"
                    size="large"
                    className="w-full"
                    disabled={!isEdit}
                />
            </Form.Item>

            <Form.Item className="flex justify-end">
                <Button
                    type="primary"
                    htmlType="button"
                    size="large"
                    onClick={onEditClick}
                    className={isEdit ? "hidden" : "block"}
                >
                    Изменить
                </Button>

                <Button
                    htmlType="submit"
                    size="large"
                    className={isEdit ? "block" : "hidden"}
                    loading={loading}
                >
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ProfileForm;
