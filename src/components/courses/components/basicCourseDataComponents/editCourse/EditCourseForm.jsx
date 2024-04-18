import {DatePicker, Form, Input, InputNumber, message, Radio, Select} from "antd";
import {useAppDispatch, useAppSelector} from "../../../../../store/index.ts";
import * as courseSelectors from "../../../store/courseSelectors.js";
import TextEditor from "../../../helper/TextEditor.jsx";
import {editCourse} from "../../../store/courseActions.js";
import {courseFormValidation, teacherFormValidation} from "../../../helper/validation.js";
import  {useEffect} from "react";
import {getUsers} from "../../../../users/userActions.js";
import dayjs from "dayjs";

const EditCourseForm = ({ form, afterFinish }) => {
    const dispatch = useAppDispatch();
    const courseDescription = useAppSelector(courseSelectors.getCourseDescription);
    const idCourse = useAppSelector(courseSelectors.getCourseId);
    const users = useAppSelector((state) => state.users.allUsers);


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const changeRequirementsField = (value) => {
        form?.setFieldValue("requirements", value);
    };

    const changeAnnotationsField = (value) => {
        form?.setFieldValue("annotations", value);
    };

    const onFinish = (values) => {
        const newValues = {
            ...values,
            startYear: Number(values["startYear"].format("YYYY")),
        };
        dispatch(editCourse({ idCourse, data: newValues }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Курс успешно отредактирован");
        afterFinish && afterFinish();
    };
    console.log(courseDescription)
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
                name: courseDescription.name,
                maximumStudentsCount: courseDescription.maximumStudentsCount,
                semester: courseDescription.semester,
                requirements: courseDescription.requirements,
                annotations: courseDescription.annotations,
                startYear: dayjs().year(courseDescription.startYear)}}

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

            <Form.Item
                name="mainTeacherId"
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

export default EditCourseForm;
