import React, { useState } from 'react';
import { Form, Row } from 'react-bootstrap';

const FullName = ({ value, onChange }) => {
    const [fullNameError, setFullNameError] = useState('');

    const validateFullName = (event) => {
        const fullName = event.target.value;
        const fullNameRegex = /^[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+\s[а-яА-ЯёЁa-zA-Z]+$/;

        if (fullName === '') {
            setFullNameError('Введите ФИО');
        } else if (!fullNameRegex.test(fullName)) {
            setFullNameError('Неверный формат ФИО');
        } else {
            setFullNameError('');
        }

        // Вызываем функцию обратного вызова для передачи значения ФИО в родительский компонент
        onChange(fullName);
    };

    return (
        <Row className="mb-3">
            <Form.Group controlId="fullName">
                <Form.Label>ФИО</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    required
                    value={value}
                    name="fullName"
                    onBlur={validateFullName}
                    onChange={(event) => onChange(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                    {fullNameError}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    );
};

export default FullName;
