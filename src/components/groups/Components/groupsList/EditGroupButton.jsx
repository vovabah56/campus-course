import React from "react";

import ModalForm from "../../../helperComponents/ModalForm.jsx";
import useModal from "../../../../hooks/useModel.js";
/*
import { useAppSelector } from "@/store";
*/
import EditGroupForm from "./EditGroupForm.jsx";
import {Button} from "antd";
import {EditOutlined} from "@ant-design/icons";

const EditGroupButton = ({ groupInfo }) => {
    const { isOpen, form, showModal, hideModal } = useModal();
/*
    const loading = useAppSelector((state) => state.loading.groups.update);
*/

    return (
        <>
            <Button icon={<EditOutlined />} onClick={showModal} />

            <ModalForm
                title="Редактирование группы"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                /*loading={loading}*/
            >
                <EditGroupForm initial={groupInfo} />
            </ModalForm>
        </>
    );
};

export default EditGroupButton;
