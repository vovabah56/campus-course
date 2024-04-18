import { useEffect } from "react";

import {useAppDispatch} from "../../store/index.ts";
import DataContent from "../helperComponents/DataContent.jsx";
import {getTeachingCourses} from "../account/store/accountActions.js";
import TeachingList from "../courses/components/TeachingList.jsx";

const TeachingPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getTeachingCourses());
    }, [dispatch]);

    return (
        <DataContent title="Преподаваемые курсы">
            <TeachingList />
        </DataContent>
    );
};

export default TeachingPage;
