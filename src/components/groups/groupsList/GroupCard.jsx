import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import EditGroupButton from "../Components/EditGroupButton.jsx";

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

                    <EditGroupButton groupInfo={groupInfo} />

{/*

                    <DeleteGroupButton idGroup={groupInfo.id} />*/}

                </div>
            </div>
        </Card>
    );
};

export default GroupCard;
