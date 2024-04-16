import { Tag } from "antd";


const TeacherItem = ( teacherInfo ) => {
    return (
        <div>
            <div className="flex items-start">
                <h3>{teacherInfo.teacherInfo.name}</h3>
                {teacherInfo.teacherInfo.isMain && (
                    <Tag color="gold" className="ml-2">
                        основной
                    </Tag>
                )}
            </div>
            <p>{teacherInfo.teacherInfo.email}</p>
        </div>
    );
};

export default TeacherItem;
