import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import InputMask from 'react-input-mask';

const PhoneNumber = ({baseValue, name}) => {

  return (
      <Form.Group controlId="phone">
        <Form.Label>Телефон</Form.Label>
        <Form.Control
            pattern='^(?:\+7 \(\d{3}\) \d{3}-\d{2}-\d{2})?$'
            defaultValue={baseValue}
            name={name}
            as={(props) => (
            <InputMask
                {...props}
                mask="+7 (999) 999-99-99"
                maskChar="_"
                type="tel"
                defaultValue={baseValue}
                placeholder="+7 (XXX) XXX-XX-XX"
                className={`form-control`}
                
            />
            )}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста, введите полный номер телефона.
        </Form.Control.Feedback>
      </Form.Group>
  );
};

export default PhoneNumber;
