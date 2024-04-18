import { Button } from "antd";
import {useAppDispatch, useAppSelector} from "../../../store/index.ts";
import {getCourseId} from "../store/courseSelectors.js";
import {changeStudentStatus} from "../store/courseActions.js";



const RejectStudentButton= (idStudent ) => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);

    const onDecline = () => {
        if (idCourse) {
            dispatch(
                changeStudentStatus({
                    idCourse,
                    idStudent,
                    data: { status: "Declined" },
                })
            );
        }
    };

    return (
        <Button type="primary" danger onClick={onDecline}>
            Отклонить заявку
        </Button>
    );
};

export default RejectStudentButton;
