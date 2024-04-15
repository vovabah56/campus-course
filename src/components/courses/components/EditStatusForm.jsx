import { Form, Radio, message } from "antd";
import {courseStatusFormValidation} from "../helper/validation.js";
import {changeCourseStatus} from "../store/courseActions.js";
import {CourseStatuses} from "../../../helper/constants.js";
import * as courseSelectors from "../store/courseSelectors.js";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";

const EditStatusForm = ({ form, afterFinish }) => {
    const dispatch = useAppDispatch();
    const courseInfo = useAppSelector(courseSelectors.getCourseInfo);
    const idCourse = useAppSelector(courseSelectors.getCourseId);

    const onFinish = (values) => {
        dispatch(changeCourseStatus({ idCourse, data: values }))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Статус курса успешно изменен");
        afterFinish && afterFinish();
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            initialValues={{ status: courseInfo.status }}
        >
            <Form.Item name="status" rules={courseStatusFormValidation.status}>
                <Radio.Group>
                    {Object.keys(CourseStatuses).map((key, i) =>
                        key !== "Created" ? (
                            <Radio key={i} value={key}>
                                {CourseStatuses[key]}
                            </Radio>
                        ) : null
                    )}
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};

export default EditStatusForm;
