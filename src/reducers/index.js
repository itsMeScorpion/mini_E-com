import { combineReducers } from 'redux';
const initialState = {
  issignedin: false,
  googlemail: null,
  googleid: null,
  addedproducts: [],
  addedsubcategory: [],
  addedvariant: [],
  addsubvariant: [],
  productItemDetails: [],
  setsuccessmessage: null,
  setresetsuccessmessage: null,
  seterrormessage: null,
};
const oauthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNED_IN':
      return {
        ...state,
        googlemail: action.payload.email,
        googleid: action.payload.id,
        issignedin: true,
      };
    case 'SIGNED_OUT':
      return {
        ...state,
        issignedin: false,
      };
    case 'SET_PRODUCTS':
      return {
        ...state,
        addedproducts: action.payload,
      };
    case 'SET_SUBCATEGORY':
      return {
        ...state,
        addedsubcategory: action.payload,
      };
    case 'SET_VARIANT':
      return {
        ...state,
        addedvariant: action.payload,
      };
    case 'SET_SUBVARIANT':
      return {
        ...state,
        addsubvariant: action.payload,
      };
    case 'SET_SUCCESS_MESSAGE':
      return {
        ...state,
        setsuccessmessage: action.payload,
      };
    case 'RESET_SUCCESS_MESSAGE':
      return {
        ...state,
        setresetsuccessmessage: action.payload,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        seterrormessage: action.payload,
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        productItemDetails: action.payload,
      };
    default:
      return state;
  }
};
export default combineReducers({
  oauth: oauthReducer,
});
