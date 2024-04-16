import {Alert, Card} from "antd";


const NotificationItem = (
    notificationData,
    className,
) => {
    console.log(notificationData)
    return notificationData.notificationData.isImportant ? (
        <Alert
            message={notificationData.notificationData.text}
            type="warning"
            className={`w-full bg-red-100 border-red-300 ${notificationData.className}`}
            showIcon
        />
    ) : (
        <Card type="inner" className={`${className} bg-gray-50`}>
            {notificationData.notificationData.text}
        </Card>
    );
};

export default NotificationItem;
