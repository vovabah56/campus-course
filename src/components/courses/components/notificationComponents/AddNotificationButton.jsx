import {useAppSelector} from "../../../../store/index.ts";
import useModal from "../../../../hooks/useModel.js";
import ModalForm from "../../../groups/Components/ModeForm.jsx";
import {Button} from "antd";
import {AppstoreAddOutlined} from "@ant-design/icons";
import AddNotificationForm from "./AddNotificationForm.jsx";

const AddNotificationButton = () => {
    const loading = useAppSelector(
        (state) => state.loading.course.addNotification
    );
    const { isOpen, form, showModal, hideModal } = useModal();

    return (
        <>
            <Button
                icon={<AppstoreAddOutlined />}
                type="primary"
                className={"mb-5"}
                onClick={showModal}
            >
                Добавить уведомление
            </Button>

            <ModalForm
                title="Создание уведомления"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <AddNotificationForm />
            </ModalForm>
        </>
    );
};

export default AddNotificationButton;
