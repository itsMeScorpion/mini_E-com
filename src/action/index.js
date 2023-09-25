import Service from '../service';

export const issigned = (id, email) => {
  return {
    type: 'SIGNED_IN',
    payload: { id, email },
  };
};
export const issigned1 = () => {
  return {
    type: 'SIGNED_OUT',
  };
};

export const setCategory = () => async (dispatch) => {
  const { data } = await Service.listProducts();
  dispatch({
    type: 'SET_PRODUCTS',
    payload: data,
  });
};

export const addCategory = (data) => async (dispatch) => {
  await Service.createProducts(data);
  dispatch(setCategory());
  dispatch(setsuccessmessage());
  dispatch(resetsuccessmessage());
};

export const DisplaySubCategory = () => async (dispatch) => {
  const { data } = await Service.listSubCategory();
  dispatch({
    type: 'SET_SUBCATEGORY',
    payload: data,
  });
};

export const addSubCategory = (data) => async (dispatch) => {
  await Service.CreateSubCategory(data);
  dispatch(DisplaySubCategory());
};

export const DisplayVariant = () => async (dispatch) => {
  const { data } = await Service.listVariant();
  dispatch({
    type: 'SET_VARIANT',
    payload: data,
  });
};

export const addVariant = (data) => async (dispatch) => {
  await Service.CreateVariant(data);
  dispatch(DisplayVariant());
};

export const DisplaySubVariant = () => async (dispatch) => {
  const { data } = await Service.listSubVariant();
  dispatch({
    type: 'SET_SUBVARIANT',
    payload: data,
  });
};

export const addSubVariant = (data) => async (dispatch) => {
  await Service.CreateSubVariant(data);
  dispatch(DisplaySubVariant());
};

export const setsuccessmessage = (data) => ({
  type: 'SET_SUCCESS_MESSAGE',
  payload: data,
});

export const resetsuccessmessage = (data) => ({
  type: 'RESET_SUCCESS_MESSAGE',
  payload: data,
});
export const seterrormessage = (data) => ({
  type: 'SET_ERROR_MESSAGE',
  payload: data,
});