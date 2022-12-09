import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { DisplayVariant, addSubVariant } from '../action';

const Forms = styled(Form)`
  margin-top: 50px;
`;
const SubVariant = () => {
  useEffect(() => {
    dispatch(DisplayVariant());
  }, []);
  const [parent, setparent] = useState('');
  const [inputval, setinputval] = useState('');
  const dispatch = useDispatch();
  const { addedvariant } = useSelector((state) => state.oauth);
  console.log('addedvariant', addedvariant);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addSubVariant({ Name: inputval, Parentid: parent }));
  };
  const subvar = addedvariant.map((products, index) => {
    return (
      <option value={products.id} placeholder="Select a value" key={index}>
        {products.Variant}
      </option>
    );
  });
  return (
    <div className="container" style={{ width: '50%' }}>
      <select onChange={(e) => setparent(e.target.value)}>
        <option>select</option>
        {subvar}
      </select>
      <Forms>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Sub-Variant</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Variant"
            onChange={(e) => setinputval(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Forms>
    </div>
  );
};

export default SubVariant;
