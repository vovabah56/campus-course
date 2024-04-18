

import EditCourseForm from "./EditCourseForm.jsx";
import {EditOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useAppSelector} from "../../../../../store/index.ts";
import useModal from "../../../../../hooks/useModel.js";
import ModalForm from "../../../../helperComponents/ModalForm.jsx";
import useRoles from "../../../../../hooks/useRoles.js";
import ShortCourseFormTeacher from "./EditCourseFormTeacher.jsx";
import * as courseSelectors from "../../../store/courseSelectors.js";

const EditCourseButton = () => {
    const { isOpen, form, showModal, hideModal } = useModal();
    var loading1 = useAppSelector((state) => state.loading.course.edit);
    var loading2 = useAppSelector((state) => state.loading.course.editShort);
    const idCourse = useAppSelector(courseSelectors.getCourseId);
    const { isUserTeacherInCourse, isUserCourseEditor } = useRoles();
    var finalForm;
    var loading;
    if(isUserTeacherInCourse(idCourse) && !isUserCourseEditor()){
        finalForm = <ShortCourseFormTeacher/>
        loading = loading2

    }
    else {
        loading = loading1
        finalForm = <EditCourseForm/>
    }
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

                {finalForm}

            </ModalForm>
        </>
    );
};

export default EditCourseButton;
