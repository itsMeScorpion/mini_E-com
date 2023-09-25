import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { addSubCategory, setCategory } from '../action';

const Forms = styled(Form)`
  margin-top: 50px;
`;
const SubCategory = () => {
  const [parent, setparent] = useState('');
  const [inputval, setinputval] = useState('');
  const dispatch = useDispatch();
  const { addedproducts } = useSelector((state) => state.oauth);
  console.log('addedproducts', addedproducts);
  useEffect(() => {
    dispatch(setCategory());
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputval.length === 0) {
      alert('Enter a Sub-Category');
    } else if (
      addedproducts.filter((value) => value.Name === inputval).length > 0
    ) {
      alert('Sub-Category already exists');
    } else {
      dispatch(addSubCategory({ Name: inputval, Parentid: parent }));
    }
  };
  const subcat = addedproducts.map((products, index) => {
    return (
      <option value={products.id} key={index}>
        {products.name}
      </option>
    );
  });
  return (
    <div className="container" style={{ width: '50%' }}>
      <select onChange={(e) => setparent(e.target.value)}>
        <option>select</option>
        {subcat}
      </select>
      <Forms>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Sub-Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Sub-Category"
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

export default SubCategory;
