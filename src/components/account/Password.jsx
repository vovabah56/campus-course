import {useState} from 'react';
import {Form, Row} from 'react-bootstrap';

const PasswordInput = ({name}) => {
    const [passwordError, setPasswordError] = useState('');

    const validatePassword = (event) => {
        const passwordInput = event.target;
        if (passwordInput.validity.valueMissing) {
            setPasswordError('Пожалуйста, введите пароль.');
        } else if (passwordInput.validity.tooShort) {
            setPasswordError('Пароль должен быть длиной не менее 6 символов.');
        } else if (passwordInput.validity.patternMismatch) {
            setPasswordError('Пароль должен содержать букву.');
        } else {
            setPasswordError('');
        }
    };

    return (
        <Row className="mb-3">
            <Form.Group controlId="password">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    minLength="6"
                    pattern="^(?=.*[a-zA-Z]).*$"
                    name="password"
                    onChange={validatePassword}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {passwordError}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    );
};

export default PasswordInput;
