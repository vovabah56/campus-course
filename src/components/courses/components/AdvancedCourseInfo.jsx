import { Badge, Tabs } from "antd";


import {getCourseDescription, getCourseNotifications} from "../store/courseSelectors.js";
import {useAppSelector} from "../../../store/index.ts";
import TextBlock from "./TextBlock.jsx";
import NotificationsBlock from "./notificationComponents/NotificationsBlock.jsx";

const AdvancedCourseInfo = () => {
    const courseDescription = useAppSelector(getCourseDescription);
    const notifications = useAppSelector(getCourseNotifications);
    console.log(courseDescription)
    console.log(notifications)
    return (
        <Tabs
            defaultActiveKey="1"
            size="large"
            className="mb-10"
            items={[
                {
                    label: "Требования к курсу",
                    key: "1",
                    children: <TextBlock text={courseDescription.requirements} />,
                },
                {
                    label: "Аннотация",
                    key: "2",
                    children: <TextBlock text={courseDescription.annotations} />,
                },
                {
                    label: (
                        <Badge
                            count={notifications.length}
                            overflowCount={3}
                            offset={[15, 5]}
                        >
                            <div>Уведомления</div>
                        </Badge>
                    ),
                    key: "3",
                    children: <NotificationsBlock />,
                },
            ]}
        />
    );
};

export default AdvancedCourseInfo;
