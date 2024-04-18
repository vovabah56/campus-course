import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import EditGroupButton from "./EditGroupButton.jsx";
import RequireAuthComponent from "../../../helperComponents/RequireAuthComponent.jsx";
import {Roles} from "../../../../helper/Roles.js";
import DeleteGroupButton from "./DeleteGroupButton.jsx";

const GroupCard = ({ groupInfo }) => {
    return (
        <Card className="mt-2">
            <div
                key={groupInfo.id}
                className="flex justify-between items-center gap-2"
            >
                <div className="text-lg text-blue-600">{groupInfo.name}</div>

                <div className="flex gap-3">
                    <Link
                        to={`/groups/${groupInfo.id}`}
                        state={{ groupName: groupInfo.name }}
                    >
                        <Button icon={<EyeOutlined />} />
                    </Link>

                    <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
                        <EditGroupButton groupInfo={groupInfo} />
                    </RequireAuthComponent>



                    <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>
                        <DeleteGroupButton idGroup={groupInfo.id} />
                    </RequireAuthComponent>

                </div>
            </div>
        </Card>
    );
};

export default GroupCard;
