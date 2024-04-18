import { Form,  Select, message } from "antd";
import { useEffect } from "react";

import {useAppDispatch, useAppSelector} from "../../../../store/index.ts";
import {getUsers} from "../../../users/userActions.js";
import {getCourseId} from "../../store/courseSelectors.js";
import {addTeacherToCourse} from "../../store/courseActions.js";
import {teacherFormValidation} from "../../helper/validation.js";


const AddTeacherForm = ({ form, afterFinish }) => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);
    const users = useAppSelector((state) => state.users.allUsers);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const onFinish = (values) => {
        dispatch(addTeacherToCourse({ idCourse, data: values }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishSuccess = () => {
        message.success("Преподаватель успешно добавлен");
        afterFinish && afterFinish();
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} autoComplete="off">
            <Form.Item
                name="userId"
                label="Выберите преподавателя"
                rules={teacherFormValidation.userId}
            >
                <Select
                    showSearch
                    size="large"
                    filterOption={(input, option) =>
                        (option?.label.toLowerCase() ?? "").startsWith(input.toLowerCase())
                    }
                    options={users.map((user) => ({
                        value: user.id,
                        label: user.fullName,
                    }))}
                />
            </Form.Item>
        </Form>
    );
};

export default AddTeacherForm;
