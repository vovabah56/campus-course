import ModalForm from "../../groups/Components/ModeForm.jsx";

import {useAppSelector} from "../../../store/index.js";
import useModal from "../../../hooks/useModel.js";
import {EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import EditStatusForm from "./EditStatusForm.jsx";

const EditStatusButton = () => {
    const { isOpen, form, showModal, hideModal } = useModal();
    const loading = useAppSelector((state) => state.loading.course.changeStatus);

    return (
        <>
            <Button icon={<EditOutlined />} onClick={showModal} />

            <ModalForm
                title="Изменение статуса курса"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <EditStatusForm />
            </ModalForm>
        </>
    );
};

export default EditStatusButton;
