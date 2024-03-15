import { useState } from 'react';
import {Button, Form, Row, Card} from 'react-bootstrap';
import { axiosRegister } from '../../../api/registr.js';

import Password from "../Password.jsx";
import ConfirmPassword from "./ConfirmPassword.jsx";
import BirthDate from '../BirthDate.jsx'
import FullName from "../FullName.jsx";
import Email from "../Email.jsx";

function RegistrationPage () {
    const [validated, setValidated] = useState(false);
    const [error, setErrors] = useState('')


    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);
            const errorText = await axiosRegister(event);
            setErrors(errorText);
        }
    };

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Card className='w-75' style={{maxWidth:'33em'}}>
                <Card.Body>
                    <Card.Title><h2>Регистрация</h2></Card.Title>
                    <h6 className="text-danger mt-3">{error}</h6>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <FullName></FullName>
                        <BirthDate name="birthdate"></BirthDate>
                        <Email></Email>
                        <Password name="password" />
                        <ConfirmPassword name="confirmPassword"></ConfirmPassword>
                        <div className="d-grid mt-2">
                            <Button type='submit' variant="primary">
                                Зарегистрироваться
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default RegistrationPage;