import {Form, Row} from "react-bootstrap";


const BirthDate = (baseValue) => {
    var date;
    if(baseValue.baseValue !== undefined){
        date = baseValue ? new Date(baseValue.baseValue).toISOString().slice(0, 10):null
    }
    return (
        <Row className="mb-3">
            <Form.Group controlId="birthdate">
                <Form.Label>ДатаРождения</Form.Label>
                <Form.Control
                    type="date"
                    name="birthdate"
                    required
                    defaultValue={date}
                />
                <Form.Control.Feedback type="invalid">
                </Form.Control.Feedback>
            </Form.Group>
        </Row>
    )
}

export default BirthDate