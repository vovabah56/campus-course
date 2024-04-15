import { useState } from "react";
import {Popconfirm, message, Button} from "antd";

import {DeleteOutlined} from "@ant-design/icons";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {deleteGroup} from "../store/groupsAction.js";

const DeleteGroupButton = ({ idGroup }) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.loading.groups.delete);

    const [openPopconfirm, setOpenPopconfirm] = useState(false);

    const onOkPopconfirm = () => {
        dispatch(deleteGroup(idGroup))
            .unwrap()
            .then(() => onFinishSuccess())
            .catch((e) => onFinishFailed(e.message));
    };

    const onFinishFailed = (value) => {
        message.error(value);
    };

    const onFinishSuccess = () => {
        message.success("Группа успешно удалена");
        setOpenPopconfirm(false);
    };

    const showPopconfirm = () => {
        setOpenPopconfirm(true);
    };

    const onCancelPopconfirm = () => {
        setOpenPopconfirm(false);
    };

    return (
        <Popconfirm
            title="Удаление группы"
            description="Вы точно хотите удалить эту группу?"
            visible={openPopconfirm}
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
            />

        </Popconfirm>
    );
};

export default DeleteGroupButton;
