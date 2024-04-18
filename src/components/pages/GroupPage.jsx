import { useParams } from "react-router-dom";


import { history } from "../../helper/history.js";
import { useEffect } from "react";
/*
import NotFound from "./NotFound";
*/
import {Roles} from "../../helper/Roles.js";
import {useAppDispatch, useAppSelector} from "../../store/index.ts";
import {getGroupError, getGroups} from "../groups/store/groupSelectors.js";
import {getCourses} from "../groups/store/groupsAction.js";
import * as GroupsAction from "../groups/store/groupsAction.js";
import RequireAuthComponent from "../helperComponents/RequireAuthComponent.jsx";
import CoursesInGroupList from "../groups/group/Group.jsx";
import DataContent from "../helperComponents/DataContent.jsx";
import CreateCourseButton from "../groups/Components/CreateCourseButton.jsx";

const GroupPage = () => {
    const dispatch = useAppDispatch();
    const { idGroup } = useParams();
    const groups = useAppSelector(getGroups);
    const error = useAppSelector(getGroupError);
    const loading = useAppSelector((state) => state.loading.getData.getCourses);
    const groupName = history.location?.state?.groupName;

    useEffect(() => {
        if (idGroup) dispatch(getCourses(idGroup));
    }, [dispatch, idGroup]);

    useEffect(() => {
        if (!groupName) {
            dispatch(GroupsAction.getGroups());
        }
    }, [groupName, dispatch]);

    const getGroupName = () => {
        if (loading) {
            return "";
        }
        return groupName ?? groups.find((group) => group.id === idGroup)?.name;
    };

    if (!!error) history.navigate("/groups");

    return (
        <DataContent title={`Группа ${getGroupName()}`}>
            <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
                <CreateCourseButton idGroup={idGroup} />
            </RequireAuthComponent>
            <CoursesInGroupList />
        </DataContent>
    );
};

export default GroupPage;
