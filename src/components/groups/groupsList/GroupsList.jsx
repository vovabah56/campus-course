import List from "../../helperComponents/List.jsx"
import { useGetGroups } from "../../../api/getGroups.js";
import GroupCard from "./GroupCard.jsx";
import ContentLoader from "react-content-loader";
import {useAppSelector} from "../../../store/index.ts";
import {getGroups} from "../store/groupSelectors.js";

const GroupsList = () => {
    const groups = useAppSelector(getGroups);
    const loading = useAppSelector((state) => state.loading.getData.getGroups);

    return !loading ? (
        <List
            data={groups}
            emptyText="Нет групп"
            renderItem={(group) => <GroupCard key={group.id} groupInfo={group} />}
        />
    ) : (
        <>
            {Array.from(Array(8).keys()).map((i) => (
                <ContentLoader
                    key={i}
                    speed={2}
                    width="100%"
                    height="78"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="6" rx="8" ry="8" width="100%" height="90%" />
                </ContentLoader>

            ))}
        </>
    );
};

export default GroupsList;
