import { Form, Input, message } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateGroup } from "../../store/groupsAction.js";
import { editGroupFormValidation } from "../../helper/validation.js";

const EditGroupForm = ({ initial, form, afterFinish }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        dispatch(updateGroup({ id: initial.id, data: values }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((error) => onFinishFailed(error.message))
            .finally(() => setLoading(false));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Группа успешно отредактирована");
        if (afterFinish) afterFinish();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ name: initial.name }}
        >
            <Form.Item
                name="name"
                label="Название группы"
                rules={editGroupFormValidation.name}
            >
                <Input size="large" />
            </Form.Item>
        </Form>
    );
};

export default EditGroupForm;
