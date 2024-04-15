import useAuth from "./useAuth";
import {useAppSelector} from "../store/index.ts";
import * as accountSelectors from "../components/account/store/accountSelectors.js";
import {Roles} from "../helper/Roles.js";


const useRoles = () => {
    const { roles, email } = useAuth();
    const teachingCourses = useAppSelector(accountSelectors.getTeachingCourses);
    const studingCourses = useAppSelector(accountSelectors.getStudingCourses);

    const isUserInRoles = (checkedRoles) =>
        roles.find((role) => checkedRoles?.includes(role));

    const isUserTeacherInCourse = (idCourse) => {
        return teachingCourses.find((c) => c.id == idCourse);
    };

    const isUserStudentInCourse = (idCourse) => {
        return studingCourses.find((c) => c.id == idCourse);
    };

    const isUserCourseEditor = (idCourse) =>
        !!isUserInRoles([Roles.isAdmin]) || !!isUserTeacherInCourse(idCourse);

    const isUserCourseSigner = (idCourse) =>
        !isUserStudentInCourse(idCourse) && !isUserTeacherInCourse(idCourse);

    const isUserCanSeeMark = (checkEmail, idCourse) =>
        !!isUserCourseEditor(idCourse) || email === checkEmail;

    return {
        isUserInRoles,
        isUserCourseEditor,
        isUserCourseSigner,
        isUserCanSeeMark,
    };
};

export default useRoles;
