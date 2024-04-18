import { Form, Input, message } from "antd";
import React from "react";

import {createGroup} from "../store/groupsAction.js";
import {createGroupFormValidation} from "../helper/validation.js";
import {useAppDispatch} from "../../../store/index.ts";

const GroupForm = ({ form, afterFinish }) => {
    const dispatch = useAppDispatch();

    const onFinish = (values) => {
        dispatch(createGroup(values))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Группа успешно добавлена");
        afterFinish && afterFinish();
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
                name="name"
                label="Название группы"
                rules={createGroupFormValidation.name}
            >
                <Input size="large" />
            </Form.Item>
        </Form>
    );
};

export default GroupForm;
