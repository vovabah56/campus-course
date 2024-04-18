import AddTeacherForm from "./AddTeacherForm.jsx";
import {useAppSelector} from "../../../../store/index.ts";
import useModal from "../../../../hooks/useModel.js";
import ModalForm from "../../../groups/Components/ModeForm.jsx";
import {AppstoreAddOutlined} from "@ant-design/icons";
import {Button} from "antd";

const AddTeacherButton = () => {
    const { isOpen, form, showModal, hideModal } = useModal();
    const loading = useAppSelector((state) => state.loading.course.addTeacher);

    return (
        <>
            <Button
                icon={<AppstoreAddOutlined />}
                type="primary"
                className={"mb-5"}
                onClick={showModal}
            >
                Добавить преподавателя
            </Button>

            <ModalForm
                title="Добавление преподавателя"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <AddTeacherForm />
            </ModalForm>
        </>
    );
};

export default AddTeacherButton;
