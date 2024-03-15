import { useState } from 'react';
import {Button,  Form, Row, Card} from 'react-bootstrap';
import { axiosLogin } from '../../../api/login.js';

import Password from "../Password.jsx";
import Email from "../Email.jsx";

export default function LoginPage() {

    const [validated, setValidated] = useState(false);
    const [error, setErrors] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            setValidated(true);
            const errorText = await axiosLogin(event);
            setErrors(errorText);
        }
    };

    return (
        <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <Card className='w-75' style={{maxWidth:'33em'}}>
                <Card.Body>
                    <Card.Title><h2>Вход</h2></Card.Title>
                    <h6 className="text-danger mt-3">{error}</h6>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Email></Email>
                        <Password></Password>
                        <div className="d-grid gap-2">
                            <Button type='submit' variant="primary">
                                Войти
                            </Button>
                            <Button href="/register" variant="secondary">
                                Регистрация
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

