import {Form, Row} from "react-bootstrap";


export default function FullName (baseValue){

    return(
        <Row className="mb-3">
            <Form.Group controlId="fullName">
                <Form.Label>ФИО</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Иванов Иван Иванович"
                    required
                    defaultValue={baseValue.baseValue}
                    name="fullName"
                />
                <Form.Control.Feedback type="invalid">
                    Пожалуйста, введите имя.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}