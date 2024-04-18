

import EditCourseForm from "./EditCourseForm.jsx";
import {EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useAppSelector} from "../../../../store/index.ts";
import useModal from "../../../../hooks/useModel.js";
import ModalForm from "../../../groups/Components/ModeForm.jsx";

const EditCourseButton = () => {
    const { isOpen, form, showModal, hideModal } = useModal();
    const loading = useAppSelector((state) => state.loading.course.edit);

    return (
        <>
            <Button icon={<EditOutlined />} onClick={showModal} />

            <ModalForm
                title="Редактирование курса"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <EditCourseForm />
            </ModalForm>
        </>
    );
};

export default EditCourseButton;
