import {useAppSelector} from "../../../store/index.ts";
import ModalForm from "../../helperComponents/ModalForm.jsx";
import {Button} from "antd";
import {AppstoreAddOutlined} from "@ant-design/icons";
import CourseForm from "../../courses/components/CourseForm.jsx";
import useModal from "../../../hooks/useModel.js";

const CreateCourseButton = ({ idGroup }) => {
    const { isOpen, form, showModal, hideModal } = useModal();
    const loading = useAppSelector((state) => state.loading.course.create);


    return (
        <>
            <Button

                icon={<AppstoreAddOutlined />}
                type="primary"
                className={"mb-2"}
                onClick={showModal}
            >

                Создать
            </Button>
            <ModalForm
                title="Создание курса"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <CourseForm idGroup={idGroup} />
            </ModalForm>
        </>
    );
};

export default CreateCourseButton;
