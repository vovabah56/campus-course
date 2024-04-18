import { Tabs } from "antd";
import StudentsBlock from "../studentsComponents/StudentsBlock.jsx";
import TeachersBlock from "./TeachersBlock.jsx";


const CoursePeopleInfo = () => {
    return (
        <Tabs
            defaultActiveKey="1"
            size="large"
            type="card"
            items={[
                {
                    label: "Преподаватели",
                    key: "1",
                    children: <TeachersBlock />,
                },
                {
                    label: "Студенты",
                    key: "2",
                    children: <StudentsBlock />,
                },
            ]}
        />
    );
};

export default CoursePeopleInfo;
