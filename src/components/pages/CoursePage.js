
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as accountActions from "../account/store/accountActions.js";


import NotFound from "./NotFound";
import DataContent from "../groups/Components/DataContent.jsx";
import {useAppDispatch, useAppSelector} from "../../store/index.ts";
import * as courseSelectors from "../courses/store/courseSelectors.js";
import * as courseActions from "../courses/store/courseActions.js";
import ContentLoader from "react-content-loader";
import CourseInfo from "../courses/components/CourseInfo.jsx";
import AdvancedCourseInfo from "../courses/components/AdvancedCourseInfo.jsx";

const Course = () => {
    const dispatch = useAppDispatch();
    const { idCourse } = useParams();
    const courseInfo = useAppSelector(courseSelectors.getCourseInfo);
    const loading = useAppSelector(
        (state) => state.loading.getData.getCourseDetails
    );
    const error = useAppSelector(courseSelectors.getCourseError);

    useEffect(() => {
        if (idCourse) dispatch(courseActions.getCourseDetails(idCourse));
        dispatch(accountActions.getTeachingCourses());
        dispatch(accountActions.getStudingCourses());
    }, []);

    if (!!error) return <NotFound />;

    return (
        <DataContent title={loading ? "" : courseInfo.name}>
            {loading ? (
                <ContentLoader height="716" width="100%">
                    <rect x="0" y="0" rx="0" ry="0" width="45%" height="44" />

                    <rect x="0" y="76" rx="0" ry="0" width="25%" height="25" />

                    <rect x="0" y="113" rx="8" ry="8" width="100%" height="400" />

                    <rect x="0" y="553" rx="8" ry="8" width="32%" height="58" />
                    <rect x="34%" y="553" rx="8" ry="8" width="32%" height="58" />
                    <rect x="68%" y="553" rx="8" ry="8" width="32%" height="58" />

                    <rect x="0" y="651" rx="8" ry="8" width="49%" height="58" />
                    <rect x="51%" y="651" rx="8" ry="8" width="49%" height="58" />
                </ContentLoader>
            ) : (
                <>
                    <CourseInfo />
                    <AdvancedCourseInfo />
                    <CoursePeopleInfo />
                </>
            )}
        </DataContent>
    );
};

export default Course;
