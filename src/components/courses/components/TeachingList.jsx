import {getTeachingCourses} from "../../account/store/accountSelectors.js";
import {useAppSelector} from "../../../store/index.ts";
import List from "../../helperComponents/List.jsx";
import CourseCard from "../../groups/group/CourseCard.jsx";
import ContentLoader from "react-content-loader";

const TeachingList = () => {
    const courses = useAppSelector(getTeachingCourses);
    const loading = useAppSelector(
        (state) => state.loading.getData.getTeachingCourses
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

export default TeachingList;
