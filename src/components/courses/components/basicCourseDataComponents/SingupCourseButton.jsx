import { UsergroupAddOutlined } from "@ant-design/icons";
import { Button } from "antd";

import {useAppDispatch, useAppSelector} from "../../../../store/index.ts";
import {getCourseId} from "../../store/courseSelectors.js";
import {signUpForCourse} from "../../store/courseActions.js";

const SignupCourseButton = () => {
    const dispatch = useAppDispatch();
    const idCourse = useAppSelector(getCourseId);
    const loading = useAppSelector((state) => state.loading.course.signup);

    const onSignup = () => {
        dispatch(signUpForCourse(idCourse));
    };

    return (
        <Button
            type="primary"
            icon={<UsergroupAddOutlined />}
            onClick={onSignup}
            loading={loading}
        >
            Записаться
        </Button>
    );
};

export default SignupCourseButton;
