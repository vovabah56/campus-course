import AddTeacherButton from "./AddTeacherButton";
import TeachersList from "./TeachersList";
import {useAppSelector} from "../../../store/index.ts";
import useRoles from "../../../hooks/useRoles.js";
import {getCourseId} from "../store/courseSelectors.js";

const TeachersBlock = () => {
    const { isUserCourseEditor } = useRoles();
    const idCourse = useAppSelector(getCourseId);

    return (
        <>
            {isUserCourseEditor(idCourse) && <AddTeacherButton />}
            <TeachersList />
        </>
    );
};

export default TeachersBlock;
