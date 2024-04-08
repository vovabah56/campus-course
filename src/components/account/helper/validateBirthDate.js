const validateBirthDate = (_, value) => {
    if (!value) {
        return Promise.resolve();
    }

    const maxDate = new Date();
    const choosenDate = new Date(value.format("YYYY-MM-DD"));
    const minDate = new Date("1900-01-01");

    if (choosenDate.getTime() < minDate.getTime()) {
        return Promise.reject(
            `Дата должна быть не меньше ${minDate.toLocaleDateString("en-US")}`
        );
    }

    if (choosenDate.getTime() > maxDate.getTime()) {
        return Promise.reject(
            `Дата должна быть не больше ${maxDate.toLocaleDateString("en-US")}`
        );
    }

    return Promise.resolve();
};

export { validateBirthDate };