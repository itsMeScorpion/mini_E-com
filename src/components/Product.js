import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  addProduct,
  DisplayProduct,
  setCategory,
  DisplayVariant,
} from '../action';
const ProductDiv = styled.div`
  width: 40%;
  margin-left: 50px;
  margin-top: 1%;
`;

const Product = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const {
    addedproducts,
    addedsubcategory,
    addedvariant,
    addsubvariant,
    productItemDetails,
  } = useSelector((state) => state.oauth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DisplayProduct());
    dispatch(setCategory());
    dispatch(DisplayVariant());
  }, []);
  const cat = addedproducts.map((products, index) => {
    return (
      <option value={products.id} key={index}>
        {products.name}
      </option>
    );
  });
  const vari = addedvariant.map((products, index) => {
    return (
      <option value={products.id} key={index}>
        {products.Variant}
      </option>
    );
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        name: productName,
        price: productPrice,
        URl: productImageUrl,
        Description: productDescription,
      })
    );
  };
  return (
    <div>
      <ProductDiv className="d-flex">
        <form>
          <h3 className="mt-3"> ADD PRODUCTS</h3>
          <div className="form-group">
            <label className="mt-4"> Product Name</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Product Name"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="mt-4"> Price</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Price"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="mt-4"> Image</label>
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Enter Image URL"
              onChange={(e) => setProductImageUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="mt-4" htmlFor="varaintdesc">
              Description
            </label>
            <textarea
              className="form-control mt-3"
              placeholder="Enter Product Description"
              id="varaintdesc"
              rows="2"
              onChange={(e) => setProductDescription(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Category:-</label>
            <select>{cat}</select>
          </div>
          <div>
            <label>Variant:-</label>
            <select>{vari}</select>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-primary btn-sm mt-3"
              onClick={onFormSubmit}
            >
              Add Variant
            </button>
          </div>
        </form>
        <div></div>
      </ProductDiv>
    </div>
  );
};

export default Product;
