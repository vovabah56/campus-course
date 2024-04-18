import {AppstoreAddOutlined} from "@ant-design/icons";
import {Button} from "antd";
import {useAppSelector} from "../../../store/index.ts";
import RequireAuthComponent from "../../helperComponents/RequireAuthComponent.jsx";
import {Roles} from "../../../helper/Roles.js";
import useModal from "../../../hooks/useModel.js";
import ModalForm from "./ModeForm.jsx";
import GroupForm from "./GroupForm.jsx";

const CreateGroupButton = () => {
    const { isOpen, form, showModal, hideModal } = useModal();
    const loading = useAppSelector((state) => state.loading.groups.create);

    return (
        <>
            <RequireAuthComponent allowedRoles={[Roles.isAdmin]}>

                <Button

                    icon={<AppstoreAddOutlined />}
                    type="primary"
                    className={"mb-2"}
                    onClick={showModal}
                >

                    Создать
                </Button>
            </RequireAuthComponent>

            <ModalForm
                title="Создание группы"
                open={isOpen}
                onCancel={hideModal}
                form={form}
                loading={loading}
            >
                <GroupForm />
            </ModalForm>
        </>
    );
};

export default CreateGroupButton;
