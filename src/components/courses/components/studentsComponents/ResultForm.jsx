import { useEffect } from "react";
import { Form, Radio, message } from "antd";
import {resultFormValidation} from "../../helper/validation.js";
import {changeStudentMark} from "../../store/courseActions.js";
import {StudentMarks} from "../../../../helper/constants.js";
import {useAppDispatch} from "../../../../store/index.ts";

const ResultForm = ({
                        idCourse,
                        initial,
                        markType,
                        studentInfo,
                        form,
                        afterFinish,
                    }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        form?.resetFields();
    }, [markType, initial]);

    const onFinish = (values) => {
        dispatch(
            changeStudentMark({
                idCourse,
                idStudent: studentInfo.id,
                data: values,
            })
        )
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishSuccess = () => {
        message.success("Отметка успешно изменена");
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
            initialValues={{ markType, mark: initial }}
        >
            <Form.Item hidden name="markType" />

            <Form.Item
                name="mark"
                rules={resultFormValidation.mark}
                label={`Студент - ${studentInfo.name}`}
            >
                <Radio.Group>
                    {Object.keys(StudentMarks).map((key, i) =>
                        key !== "NotDefined" ? (
                            <Radio key={i} value={key}>
                                {StudentMarks[key]}
                            </Radio>
                        ) : null
                    )}
                </Radio.Group>
            </Form.Item>
        </Form>
    );
};

export default ResultForm;
