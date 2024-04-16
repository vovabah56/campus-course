import NotificationItem from "./NotificationItem";
import {getCourseNotifications} from "../store/courseSelectors.js";
import {useAppSelector} from "../../../store/index.ts";
import List from "../../header/List.jsx";

const NotificationsList = () => {
    const notifications = useAppSelector(getCourseNotifications);
    console.log(notifications)
    return (
        <List
            data={notifications}
            emptyText="Нет уведомлений"
            renderItem={(notification, i) => (
                <NotificationItem
                    key={i}
                    notificationData={notification}
                    className={i !== notifications.length ? "mb-3" : ""}
                />
            )}
        />
    );
};

export default NotificationsList;
