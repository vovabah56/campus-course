import {Popconfirm, message, Button} from "antd";
import {history} from "../../../helper/history.js";
import {deleteCourse} from "../store/courseActions.js";
import {getCourseId} from "../store/courseSelectors.js";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {DeleteOutlined} from "@ant-design/icons";
import usePopconfirm from "../../../hooks/usePopconfirm.js";

const DeleteCourseButton = () => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);
    const loading = useAppSelector((state) => state.loading.course.delete);

    const { openPopconfirm, showPopconfirm, onCancelPopconfirm } =
        usePopconfirm();

    const onOkPopconfirm = () => {
        dispatch(deleteCourse(idCourse))
    .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Курс успешно удален");
        history.navigate && history.navigate(-1);
    };

    return (
        <Popconfirm
            title="Удалить курс"
            description="Вы уверены, что хотите удалить этот курс?"
            open={openPopconfirm}
            onConfirm={onOkPopconfirm}
            onCancel={onCancelPopconfirm}
            okText="Да"
            cancelText="Нет"
            okButtonProps={{ loading: loading }}
        >
            <Button
                danger
                icon={<DeleteOutlined />}
                onClick={showPopconfirm}
                className={"ml-3"}
            />
        </Popconfirm>
    );
};

export default DeleteCourseButton;
