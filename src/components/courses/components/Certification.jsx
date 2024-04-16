import { useForm } from "antd/es/form/Form";
import { useState } from "react";

import ResultButton from "./ResultButton";
import ModalForm from "../../groups/Components/ModeForm.jsx";
import {useAppSelector} from "../../../store/index.ts";
import {getCourseId} from "../store/courseSelectors.js";
import ResultForm from "./ResultForm.jsx";


const Certification = ({
                                                   studentInfo,
                                                   editable = false,
}) => {
    const loading = useAppSelector(
        (state) => state.loading.course.changeStudentMark
    );
    const [isResultModalOpen, setResultModalOpen] = useState(false);
    const [markType, setMarkType] = useState("Midterm");
    const [resultForm] = useForm();
    const idCourse = useAppSelector(getCourseId);

    const showResultModal = (value) => {
        setMarkType(value);
        setResultModalOpen(true);
    };

    const handleResultModalCancel = () => {
        setResultModalOpen(false);
    };
    console.log(studentInfo)
    return (
        <>
            <ModalForm
                title={`Изменение отметки ${
                    markType === "Midterm" ? "промежуточной" : "итоговой"
                } аттестации`}
                open={isResultModalOpen}
                onCancel={handleResultModalCancel}
                form={resultForm}
                loading={loading}
            >
                <ResultForm
                    markType={markType}
                    initial={
                        markType === "Midterm"
                            ? studentInfo.midtermResult
                            : studentInfo.finalResult
                    }
                    studentInfo={studentInfo}
                    idCourse={idCourse}
                />
            </ModalForm>

            <div className="flex xl:flex-row flex-col gap-10 md:items-end items-start">
                <ResultButton
                    result={studentInfo.midtermResult}
                    name={"Промежуточная аттестация"}
                    editable={editable}
                    onClick={() => showResultModal("Midterm")}
                />
                <ResultButton
                    result={studentInfo.finalResult}
                    name={"Финальная аттестация"}
                    editable={editable}
                    onClick={() => showResultModal("Final")}
                />
            </div>
        </>
    );
};

export default Certification;
