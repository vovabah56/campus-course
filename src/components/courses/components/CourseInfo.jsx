import { Card } from "antd";


import * as courseSelectors from "../store/courseSelectors.js";
import {useAppSelector} from "../../../store/index.ts";
import {CourseStatuses, Semesters} from "../../../helper/constants.js";
import useRoles from "../../../hooks/useRoles.js";
import DeleteCourseButton from "./basicCourseDataComponents/DeleteCourseButton.jsx";
import SignupCourseButton from "./basicCourseDataComponents/SingupCourseButton.jsx";
import EditStatusButton from "./basicCourseDataComponents/EditStatusButton.jsx";
import EditCourseButton from "./basicCourseDataComponents/EditCourseButton.jsx";

const gridFullStyle = {
    width: "100%",
};

const gridHalfStyle = {
    width: "50%",
};

const CourseInfo = () => {
    const idCourse = useAppSelector(courseSelectors.getCourseId);
    const courseInfo = useAppSelector(courseSelectors.getCourseInfo);

    const { isUserCourseEditor, isUserCourseSigner } = useRoles();


    return (
        <>
            <div className="mb-10">
                <div className="flex justify-between mb-3 gap-5 sm:flex-row flex-col">
                    <h2>Основные данные курса</h2>

                    <div className="flex gap-10 sm:flex-row flex-col">
                        {courseInfo.status === "OpenForAssigning" &&
                            isUserCourseSigner(idCourse) && <SignupCourseButton />}

                        {isUserCourseEditor(idCourse) && (
                            <div className="flex gap-2">
                                <EditCourseButton />
                                <DeleteCourseButton />
                            </div>
                        )}
                    </div>
                </div>

                <Card>
                    <Card.Grid hoverable={false} style={gridFullStyle}>
                        <div className="flex justify-between align-middle">
                            <div>
                                <h3>Статус курса</h3>
                                <p className={`text-base ${courseInfo.status}`}>
                                    {CourseStatuses[courseInfo.status]}
                                </p>
                            </div>
                            {isUserCourseEditor(idCourse) && <EditStatusButton />}
                        </div>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridHalfStyle}>
                        <h3>Учебный год</h3>
                        <p className="text-base">{`${courseInfo.startYear} - ${
                            courseInfo.startYear + 1
                        }`}</p>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridHalfStyle}>
                        <h3>Семестр</h3>
                        <p className="text-base">{Semesters[courseInfo.semester]}</p>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridHalfStyle}>
                        <h3>Всего мест</h3>
                        <p className="text-base">{courseInfo.maximumStudentsCount}</p>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridHalfStyle}>
                        <h3>Студентов зачислено</h3>
                        <p className="text-base">{courseInfo.studentsEnrolledCount}</p>
                    </Card.Grid>

                    <Card.Grid hoverable={false} style={gridFullStyle}>
                        <h3>Зявок на рассмотрении</h3>
                        <p className="text-base">{courseInfo.studentsInQueueCount}</p>
                    </Card.Grid>
                </Card>
            </div>
        </>
    );
};

export default CourseInfo;
