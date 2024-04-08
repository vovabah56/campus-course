const Semesters = {
    Autumn: "Осенний",
    Spring: "Весенний",
};

const CourseStatuses = {
    Created: "Создан",
    OpenForAssigning: "Открыт для записи",
    Started: "В процессе обучения",
    Finished: "Закрыт",
};

const StudentStatuses = {
    InQueue: "в очереди",
    Accepted: "принят в группу",
    Declined: "отклонен",
};

const StudentMarks = {
    NotDefined: "отметки нет",
    Passed: "успешно пройдена",
    Failed: "зафейлена",
};

const courseStatusColors = {
    Created: "grey",
    OpenForAssigning: "green",
    Started: "blue",
    Finished: "red",
};

const studentStatusColors = {
    InQueue: "blue",
    Accepted: "green",
    Declined: "red",
};

const marksColors = {
    NotDefined: "grey",
    Passed: "green",
    Failed: "red",
};

export { Semesters, CourseStatuses, StudentStatuses, StudentMarks, courseStatusColors, studentStatusColors, marksColors };
