import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  setCategory,
  addCategory,
  addSubCategory,
  setsuccessmessage,
  seterrormessage,
} from '../action';
import 'react-toastify/dist/ReactToastify.css';

const Forms = styled(Form)`
  margin-top: 50px;
`;
const Category = () => {
  const { addedproducts } = useSelector((state) => state.oauth);
  const dispatch = useDispatch();
  const [val, setval] = useState('');
  useEffect(() => {
    setCategory();
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (val.length === 0) {
      dispatch(seterrormessage('Enter a category'));
    } else if (addedproducts.filter((value) => value.name === val).length > 0) {
      dispatch(seterrormessage('category already exists'));
    } else {
      dispatch(addCategory({ name: val }));
      dispatch(setsuccessmessage('Category added succesfully'));
    }
  };
  return (
    <div className="container" style={{ width: '50%' }}>
      <Forms>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Category"
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

export default Category;