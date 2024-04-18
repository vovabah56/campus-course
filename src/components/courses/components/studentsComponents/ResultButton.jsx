import { Button, Tag } from "antd";
import {marksColors, StudentMarks} from "../../../../helper/constants.js";



const ResultButton = (
    {
        result,
        name,
        editable = false,
        onClick,
    }) => {
    console.log(name)
    return (
        <div className="flex sm:flex-row flex-col gap-2 sm:items-center items-start">
            {editable ? (
                <Button className="text-base" type="link" onClick={onClick}>
                    {name}
                </Button>
            ) : (
                <div className="text-base">{name}</div>
            )}
            —
            <Tag color={marksColors[result]} className="ml-2">
                {StudentMarks[result]}
            </Tag>
        </div>
    );
};

export default ResultButton;
