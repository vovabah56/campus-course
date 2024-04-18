import AddNotificationButton from "./AddNotificationButton.jsx";
import NotificationsList from "./NotificationsList.jsx";
import {useAppSelector} from "../../../../store/index.ts";
import useRoles from "../../../../hooks/useRoles.js";
import {getCourseId} from "../../store/courseSelectors.js";

const NotificationsBlock = () => {
    const { isUserCourseEditor } = useRoles();
    const idCourse = useAppSelector(getCourseId);

    return (
        <>
            {isUserCourseEditor(idCourse) && <AddNotificationButton />}
            <NotificationsList />
        </>
    );
};

export default NotificationsBlock;
