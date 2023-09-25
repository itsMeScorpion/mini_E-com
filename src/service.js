import jsonserver from './json-server';

export default {
  //List
  listProducts: () => jsonserver.get('Category'),
  //Create
  createProducts: (data) => jsonserver.post('Category', data),
  //update
  updateProducts: (id, data) => jsonserver.put(`Category/${id}`, data),
  //delete
  deleteProducts: (id) => jsonserver.delete(`Category/${id}`),
  // get
  listSubCategory: () => jsonserver.get('SubCategory'),
  //Create
  CreateSubCategory: (data) => jsonserver.post('SubCategory', data),

  listVariant: () => jsonserver.get('Variant'),
  //Create
  CreateVariant: (data) => jsonserver.post('Variant', data),

  listSubVariant: () => jsonserver.get('SubVariant'),
  //Create
  CreateSubVariant: (data) => jsonserver.post('SubVariant', data),
  //   getPost: (id) => jsonserver.get(`posts/${id}`),
  CreateProductItem: (data) => jsonserver.post('product', data),
  ListProductItem: () => jsonserver.get('product'),
};
