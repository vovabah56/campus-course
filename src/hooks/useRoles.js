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
        console.log(!!teachingCourses.find((c) => c.id === idCourse))
        return !!teachingCourses.find((c) => c.id === idCourse);
    };

    const isUserStudentInCourse = (idCourse) => {
        return studingCourses.find((c) => c.id == idCourse);
    };

    const isUserCourseEditor = () =>
        !!isUserInRoles([Roles.isAdmin]);

    const isUserCourseSigner = (idCourse) =>
        !isUserStudentInCourse(idCourse) && !isUserTeacherInCourse(idCourse);

    const isUserCanSeeMark = (checkEmail, idCourse) =>
        !!isUserCourseEditor(idCourse) || email === checkEmail;


    return {
        isUserInRoles,
        isUserCourseEditor,
        isUserCourseSigner,
        isUserCanSeeMark,
        isUserTeacherInCourse
    };
};

export default useRoles;
