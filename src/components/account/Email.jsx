import {Form, Row} from "react-bootstrap";


export default function Email(baseValue){
    return(
        <Row className="mb-3">
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="user@example.com"
                    required
                    name="email"
                    defaultValue={baseValue.baseValue}
                />
                <Form.Control.Feedback type="invalid">
                    Не соответствует формату Email.
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}