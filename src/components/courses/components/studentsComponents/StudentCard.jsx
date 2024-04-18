

import useRoles from "../../../../hooks/useRoles.js";
import {StudentStatuses} from "../../../../helper/constants.js";
import {useAppSelector} from "../../../../store/index.ts";
import {getCourseId} from "../../store/courseSelectors.js";
import AcceptStudentButton from "./AcceptStudentButton.jsx";
import Certification from "./Certification.jsx";
import RejectStudentButton from "./RejectStudentButton.jsx";



const StudentItem = ( studentInfo ) => {
    const { isUserCourseEditor, isUserCanSeeMark } = useRoles();
    const idCourse = useAppSelector(getCourseId);

    studentInfo = studentInfo.studentInfo
    console.log(studentInfo)
    return (
        <div className="w-full md:flex-row flex gap-5 flex-col md:items-center items-start justify-between">
            <div>
                <h3>{studentInfo.name}</h3>
                <p>
                    Статус -{" "}
                    <span className={studentInfo.status}>
            {StudentStatuses[studentInfo.status]}
          </span>
                </p>
                <p>{studentInfo.email}</p>
            </div>

            {isUserCourseEditor(idCourse) && (
                <>
                    {studentInfo.status === "InQueue" && (
                        <div className="flex sm:flex-row flex-col gap-3">
                            <AcceptStudentButton idStudent={studentInfo.id} />
                            <RejectStudentButton idStudent={studentInfo.id} />
                        </div>
                    )}
                </>
            )}

            {isUserCanSeeMark(studentInfo.email, idCourse) && (
                <>
                    {studentInfo.status === "Accepted" && (
                        <Certification
                            studentInfo={studentInfo}
                            editable={isUserCourseEditor(idCourse)}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default StudentItem;
