import {Checkbox, Form, Input, message} from "antd";

import {notificationFormValidation} from "../helper/validation.js";
import {getCourseId} from "../store/courseSelectors.js";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {addNotificationToCourse} from "../store/courseActions.js";

const {TextArea} = Input;


const AddNotificationForm = ({  form,
                                 afterFinish,
                             }) => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);

    const onFinish = (values) => {
        dispatch(addNotificationToCourse({ idCourse, data: values }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishSuccess = () => {
        message.success("Уведомление успешно добавлено");
        afterFinish && afterFinish();
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{isImportant: false}}
        >
            <Form.Item name="text" rules={notificationFormValidation.text}>
                <TextArea rows={4}/>
            </Form.Item>

            <Form.Item name="isImportant" valuePropName="checked">
                <Checkbox>Важное</Checkbox>
            </Form.Item>
        </Form>
    );
};

export default AddNotificationForm;
