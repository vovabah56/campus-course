import {useAppSelector} from "../../../../store/index.ts";
import ContentLoader from "react-content-loader";
import List from "../../../helperComponents/List.jsx";
import CourseCard from "./CourseCard.jsx";
import {getCourses} from "../../store/groupSelectors.js";

const CoursesInGroupList = () => {
    const courses = useAppSelector(getCourses);
    const loading = useAppSelector((state) => state.loading.getData.getCourses);

    return !loading ? (
        <List
            data={courses}
            emptyText="Нет курсов"
            renderItem={(course) => (
                <CourseCard key={course.id} courseInfo={course} />
            )}
        />
    ) : (
        <>
            {Array.from(Array(8).keys()).map((i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    width="100%"
                    height="78"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="6" rx="8" ry="8" width="100%" height="90%" />
                </ContentLoader>
            ))}
        </>
    );
};

export default CoursesInGroupList;
