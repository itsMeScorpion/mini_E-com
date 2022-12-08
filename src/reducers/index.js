import { combineReducers } from 'redux';
const initialState = {
  issignedin: false,
  googlemail: null,
  googleid: null,
  addedproducts: [],
  addedsubcategory: [],
  addedvariant: [],
  addsubvariant: [],
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
    default:
      return state;
  }
};
export default combineReducers({
  oauth: oauthReducer,
});