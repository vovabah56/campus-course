import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Empty } from "antd";

const List = ({ data, emptyText = "", renderItem }) => {
    const [parent] = useAutoAnimate();

    return data.length === 0 ? (
        <Empty description={emptyText} />
    ) : (
        <div ref={parent}>{data.map(renderItem)}</div>
    );
};

export default List;
