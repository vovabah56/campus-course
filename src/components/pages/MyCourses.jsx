import { useEffect } from "react";

import {useAppDispatch} from "../../store/index.ts";
import DataContent from "../helperComponents/DataContent.jsx";
import {getStudingCourses} from "../account/store/accountActions.js";
import StudingCoursesList from "../courses/components/myCoursesComponents/StudingCoursesList.jsx";

const MyCourses = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getStudingCourses());
    }, [dispatch]);

    return (
        <DataContent title="Мои курсы">
            <StudingCoursesList />
        </DataContent>
    );
};

export default MyCourses;
