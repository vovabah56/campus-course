import { useState } from "react";
import { useForm } from "antd/es/form/Form";

const useModal = () => {
    const [isOpen, setOpen] = useState(false);
    const [form] = useForm();

    const showModal = () => {
        setOpen(true);
    };

    const hideModal = () => {
        setOpen(false);
    };

    return {
        isOpen,
        form,
        showModal,
        hideModal,
    };
};

export default useModal;
