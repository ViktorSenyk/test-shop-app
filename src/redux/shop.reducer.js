import {
  ADD_PRODUCTS_DATA_TO_STORE,
  SET_IS_PRODUCTS_DETAILS_ACTIVE,
  SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE,
  SET_CHOSEN_PRODUCT_ID,
} from './shop.actions';

const initialState = {
  productsList: [],
  isProductDetailsActive: false,
  isProductCreatedWindowActive: false,
  chosenProductId: null,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS_DATA_TO_STORE:
      return {
        ...state,
        productsList: action.payload.producsData,
      };
    case SET_IS_PRODUCTS_DETAILS_ACTIVE:
      return {
        ...state,
        isProductDetailsActive: action.payload.isActive,
      };
    case SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE:
      return {
        ...state,
        isProductCreatedWindowActive: action.payload.isActive,
      };
    case SET_CHOSEN_PRODUCT_ID:
      return {
        ...state,
        chosenProductId: action.payload.id,
      };
    default:
      return state;
  }
};

export default shopReducer;
