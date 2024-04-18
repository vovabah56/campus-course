import React, { useEffect } from "react";

import GroupsList from "../groups/Components/groupsList/GroupsList.jsx";
import { getGroups } from "../groups/store/groupsAction.js";
import {useAppDispatch} from "../../store/index.ts";
import DataContent from "../helperComponents/DataContent.jsx";
import CreateGroupButton from "../groups/Components/CreateGroupButton.jsx";

const GroupsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getGroups());
    }, [dispatch]);

    return (
        <DataContent title="Группы кампусных курсов">
            <CreateGroupButton />
            <GroupsList />
        </DataContent>
    );
};

export default GroupsPage;
