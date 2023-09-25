import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { DisplayVariant, addVariant } from '../action';

const Forms = styled(Form)`
  margin-top: 50px;
`;
const Variant = () => {
  const { addedproducts } = useSelector((state) => state.oauth);
  const dispatch = useDispatch();
  const [val, setval] = useState('');
  useEffect(() => {
    DisplayVariant();
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (val.length === 0) {
      alert('Enter a Variant');
    } else if (addedproducts.filter((value) => value.name === val).length > 0) {
      alert('Variant already exists');
    } else {
      dispatch(addVariant({ Variant: val }));
    }
  };
  return (
    <div className="container" style={{ width: '50%' }}>
      <Forms>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Variant</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Variant"
            onChange={(e) => setval(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Forms>
    </div>
  );
};

export default Variant;
