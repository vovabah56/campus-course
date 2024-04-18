import { Button } from "antd";

import {changeStudentStatus} from "../../store/courseActions.js";
import {getCourseId} from "../../store/courseSelectors.js";
import {useAppDispatch, useAppSelector} from "../../../../store/index.ts";



const AcceptStudentButton = ( {idStudent }) => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);

    const onAccept = () => {
        if (idCourse) {
            dispatch(
                changeStudentStatus({
                    idCourse,
                    idStudent,
                    data: { status: "Accepted" },
                })
            );
        }
    };

    return (
        <Button type="primary" onClick={onAccept}>
            Принять
        </Button>
    );
};

export default AcceptStudentButton;
