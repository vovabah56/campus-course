import { Divider } from "antd";

import List from "../../header/List.jsx";
import useAuth from "../../../hooks/useAuth.js";
import {getCourseStudents} from "../store/courseSelectors.js";
import {useAppSelector} from "../../../store/index.ts";
import StudentItem from "./StudentCard.jsx";

const StudentsBlock = () => {
    const students = useAppSelector(getCourseStudents);
    const { email } = useAuth();
    const sortedStudents = [...students].sort((x) =>
        x.email === email ? -1 : 0
    );

    return (
        <List
            data={sortedStudents}
            emptyText="Нет студентов"
            renderItem={(student, i) => (
                <>
                    {console.log(student.id)}
                    <StudentItem key={student.id} studentInfo={student} />
                    {i !== students.length - 1 && <Divider />}
                </>
            )}
        />
    );
};

export default StudentsBlock;
