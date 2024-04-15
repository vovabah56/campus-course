import React, { useEffect } from "react";
import {
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    message,
} from "antd";

import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {courseFormValidation} from "../helper/validation.js";
import {createCourse} from "../store/courseActions.js";
import TextEditor from "../helper/TextEditor.jsx";
import {getUsers} from "../../users/userActions.js";



const CourseForm = ({ idGroup, form, afterFinish }) => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.users.allUsers);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const changeRequirementsField = (value) => {
        form?.setFieldsValue({ requirements: value });
    };

    const changeAnnotationsField = (value) => {
        form?.setFieldsValue({ annotations: value });
    };

    const onFinish = (values) => {
        const newValues = {
            ...values,
            startYear: Number(values["startYear"].format("YYYY")),
        };

        dispatch(createCourse({ idGroup, data: newValues }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Курс успешно добавлен");
        afterFinish && afterFinish();
    };

    return (
        <>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                initialValues={{ semester: "Autumn" }}
            >
                <Form.Item
                    name="name"
                    label="Название курса"
                    rules={courseFormValidation.name}
                >
                    <Input size="large" />
                </Form.Item>

                <Form.Item
                    name="startYear"
                    label="Год начала курса"
                    rules={courseFormValidation.startYear}
                >
                    <DatePicker disabledDate={d => !d || d.isAfter("2029") || d.isBefore("2000") } size="large" picker="year" className="w-full" />
                </Form.Item>

                <Form.Item
                    name="maximumStudentsCount"
                    label="Общее количество мест"
                    rules={courseFormValidation.maximumStudentsCount}
                >
                    <InputNumber size="large" min={1} className="w-full" />
                </Form.Item>

                <Form.Item
                    name="semester"
                    label="Семестр"
                    rules={courseFormValidation.semester}
                >
                    <Radio.Group defaultValue="Autumn">
                        <Radio value="Autumn">Осенний</Radio>
                        <Radio value="Spring">Весенний</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name="mainTeacherId"
                    label="Основной преподаватель курса"
                    rules={courseFormValidation.mainTeacherId}
                >
                    <Select
                        size="large"
                        showSearch
                        filterOption={(input, option) =>
                            (option?.label.toLowerCase() ?? "").startsWith(
                                input.toLowerCase()
                            )
                        }
                        options={users.map((user) => ({
                            value: user.id,
                            label: user.fullName,
                        }))}
                    ></Select>
                </Form.Item>

                <Form.Item
                    name="requirements"
                    label="Требования"
                    rules={courseFormValidation.requirements}
                >
                    <TextEditor handleChange={changeRequirementsField} />

                </Form.Item>

                <Form.Item
                    name="annotations"
                    label="Аннотации"
                    rules={courseFormValidation.annotations}
                >
                    <TextEditor handleChange={changeAnnotationsField} />
                </Form.Item>
            </Form>
        </>
    );
};

export default CourseForm;
