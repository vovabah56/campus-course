

export const validateCourseDate = (value) => {
    if (!value) {
        return Promise.resolve();
    }

    const maxYear = 2029;
    const minYear = 2000;
    const chosenDate = new Date(value);
    console.log(value)
    const chosenYear = chosenDate.getFullYear();

    if (chosenYear < minYear) {
        return Promise.reject(`Год должен быть не меньше ${minYear}`);
    }

    if (chosenYear > maxYear) {
        return Promise.reject(`Год должен быть не больше ${maxYear}`);
    }

    return Promise.resolve();
};
/*export const validateCourseDate = (value) => {
    if (!value) {
        return Promise.resolve();
    }

    const maxDate = new Date("2029");


    const chosenYear = value.year();
    const minDate = new Date("2000");
    if (choosenDate.getTime() < minDate.getTime()) {
        return Promise.reject(`Год должен быть не меньше ${minDate.getFullYear()}`);
    }

    if (choosenDate.getTime() > maxDate.getTime()) {
        return Promise.reject(`Год должен быть не больше ${maxDate.getFullYear()}`);
    }

    return Promise.resolve();
};*/

export const courseFormValidation = {
    name: [
        {
            required: true,
            message: "Введите название курса",
        },
    ],
    startYear: [
        {
            required: true,
            message: "Введите год начала курса",
        },
        {
            validator: validateCourseDate,
        },
    ],
    maximumStudentsCount: [
        {
            required: true,
            message: "Введите количество мест",
        },
    ],
    semester: [
        {
            required: true,
            message: "Выберите семестр",
        },
    ],
    mainTeacherId: [
        {
            required: true,
            message: "Выберите основного преподавателя",
        },
    ],
    requirements: [
        {
            required: true,
            message: "Введите требования",
        },
    ],
    annotations: [
        {
            required: true,
            message: "Введите аннотации",
        },
    ],
};

export const notificationFormValidation = {
    text: [
        {
            required: true,
            message: "Введите текст",
        },
    ],
};

export const teacherFormValidation = {
    userId: [
        {
            required: true,
            message: "Выберите преподавателя",
        },
    ],
};

export const courseStatusFormValidation = {
    status: [
        {
            required: true,
            message: "Выберите статус",
        },
        ({ getFieldValue }) => ({
            validator() {
                if (getFieldValue("status") === "Created") {
                    return Promise.reject("Выберите статус");
                }
                return Promise.resolve();
            },
        }),
    ],
};

export const resultFormValidation = {
    mark: [
        {
            required: true,
            message: "Выберите оценку",
        },
        ({ getFieldValue }) => ({
            validator() {
                if (getFieldValue("mark") === "NotDefined") {
                    return Promise.reject("Выберите оценку");
                }
                return Promise.resolve();
            },
        }),
    ],
};


