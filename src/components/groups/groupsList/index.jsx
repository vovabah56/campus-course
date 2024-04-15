import React, { useEffect } from "react";

import GroupsList from "../groupsList/GroupsList.jsx";
import { getGroups } from "../store/groupsAction.js";
import {useAppDispatch} from "../../../store/index.ts";
import DataContent from "../Components/DataContent.jsx";
import CreateGroupButton from "../Components/CreateGroupButton.jsx";

const Groups = () => {
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

export default Groups;
