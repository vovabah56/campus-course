import {validateBirthDate} from "./validateBirthDate.js";

const registerFormValidation = {
    fullName: [
        {
            required: true,
            message: "Введите ФИО",
        },
    ],
    birthDate: [
        {
            required: true,
            message: "Введите дату рождения",
        },
        {
            validator: validateBirthDate,
        },
    ],
    email: [
        {
            required: true,
            message: "Введите email",
        },
        {
            type: "email",
            message: "Введите корректный email",
        },
    ],
    password: [
        {
            required: true,
            message: "Введите пароль",
        },
        {
            min: 6,
            message: "Минимальная длина - 6",
        },
        {
            max: 32,
            message: "Максимальная длина - 32",
        },
        {
            pattern: /.*[0-9].*/,
            message: "Пароль должен содержать хотя бы одну цифру",
        },
    ],
    confirm: [
        {
            required: true,
            message: "Подтвердите пароль",
        },
        function ({ getFieldValue }) {
            return {
                validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject("Пароли не совпадают");
                },
            };
        },
    ],
};

const loginFormValidation = {
    email: [
        {
            required: true,
            message: "Введите email",
        },
        {
            type: "email",
            message: "Введите корректный email",
        },
    ],
    password: [
        {
            required: true,
            message: "Введите пароль",
        },
    ],
};


export const profileFormValidation = {
    fullName: [
        {
            required: true,
            message: "Введите ФИО",
        },
    ],
    birthDate: [
        {
            required: true,
            message: "Введите дату рождения",
        },
        {
            validator: validateBirthDate,
        },
    ],
};

export { registerFormValidation, loginFormValidation };



