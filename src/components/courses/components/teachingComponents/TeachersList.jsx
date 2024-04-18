import { Divider } from "antd";

import TeacherItem from "./TeacherItem.jsx";
import {useAppSelector} from "../../../../store/index.ts";
import {getCourseTeachers} from "../../store/courseSelectors.js";
import List from "../../../helperComponents/List.jsx";

const TeachersList = () => {
    const teachers = useAppSelector(getCourseTeachers);
    const sortedTeachers = [...teachers].sort((x) => (x.isMain ? -1 : 0));
    return (
        <List
            data={sortedTeachers}
            renderItem={(teacher, i) => (
                <>
                    <TeacherItem key={teacher.email} teacherInfo={teacher} />
                    {i !== teachers.length - 1 && <Divider />}
                </>
            )}
        />
    );
};

export default TeachersList;
