import {useAppSelector} from "../../../store/index.ts";
import {getStudingCourses} from "../../account/store/accountSelectors.js";
import List from "../../header/List.jsx";
import CourseCard from "../../groups/group/CourseCard.jsx";
import ContentLoader from "react-content-loader";

const StudingCoursesList = () => {
    const courses = useAppSelector(getStudingCourses);
    const loading = useAppSelector(
        (state) => state.loading.getData.getStudingCourses
    );

    return !loading ? (
        <List
            data={courses}
            renderItem={(course) => (
                <CourseCard key={course.id} courseInfo={course} />
            )}
        ></List>
    ) : (
        <>
            {Array.from(Array(8).keys()).map((i) => (
                <ContentLoader
                    speed={2}
                    width="100%"
                    height="78"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    key={i}
                >
                    <rect x="0" y="6" rx="8" ry="8" width="100%" height="90%" />
                </ContentLoader>

            ))}
        </>
    );
};

export default StudingCoursesList;
