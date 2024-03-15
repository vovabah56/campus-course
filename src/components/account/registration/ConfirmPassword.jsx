import {useState} from 'react';
import {Form, Row} from 'react-bootstrap';

const ConfirmPasswordInput = ({confirmPassword}) => {
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const validateConfirmPassword = () => {
        const confirmPasswordInput = document.getElementById("confirmPassword").value;
        console.log(confirmPasswordInput)
        confirmPassword = document.getElementById("password")

        setConfirmPasswordError(confirmPasswordInput.value);
        if (confirmPassword.value != confirmPasswordInput) {
            setConfirmPasswordError('Пароли не совпадают.');
        } else {
            setConfirmPasswordError('');
        }
    };

    return (
        <Row className="mb-3">
            <Form.Group controlId="confirmPassword">
                <Form.Label>Подтвердите пароль</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    minLength="6"
                    pattern="^(?=.*[a-zA-Z]).*$"
                    onChange={validateConfirmPassword}
                    name="confirmpassword"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    {confirmPasswordError}
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    );
};

export default ConfirmPasswordInput;