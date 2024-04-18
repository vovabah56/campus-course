import { Form,  message } from "antd";

import TextEditor from "../../../helper/TextEditor.jsx";
import * as courseSelectors from "../../../store/courseSelectors.js";
import {courseFormValidation} from "../../../helper/validation.js";
import {useAppDispatch, useAppSelector} from "../../../../../store/index.ts";
import { editCourseShort} from "../../../store/courseActions.js";

const ShortCourseFormTeacher = ({ form, afterFinish }) => {
    const dispatch = useAppDispatch();
    const courseDescription = useAppSelector(
        courseSelectors.getCourseDescription
    );
    const idCourse = useAppSelector(courseSelectors.getCourseId);

    const changeRequirementsField = (value) => {
        form?.setFieldValue("requirements", value);
    };

    const changeAnnotationsField = (value) => {
        form?.setFieldValue("annotations", value);
    };

    const onFinish = (values) => {
        dispatch(editCourseShort({ idCourse, data: values }))
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

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{
                requirements: courseDescription.requirements,
                annotations: courseDescription.annotations, }}
        >
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
    );
};

export default ShortCourseFormTeacher;
