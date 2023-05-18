import { fetchProducts } from '../gateway/products';

export const ADD_PRODUCTS_DATA_TO_STORE = 'SHOP/ADD_PRODUCTS_DATA_TO_STORE';
export const SET_IS_PRODUCTS_DETAILS_ACTIVE = 'SHOP/SET_IS_PRODUCTS_DETAILS_ACTIVE';
export const SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE = 'SHOP/SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE';
export const SET_CHOSEN_PRODUCT_ID = 'SHOP/SET_CHOSEN_PRODUCT_ID';

const addProductsDataToStore = producsData => ({
  type: ADD_PRODUCTS_DATA_TO_STORE,
  payload: {
    producsData,
  },
});

export const setIsProductsDetailsActive = isActive => ({
  type: SET_IS_PRODUCTS_DETAILS_ACTIVE,
  payload: {
    isActive,
  },
});

export const setIsProductCreatedWindowActive = isActive => ({
  type: SET_IS_PRODUCT_CREATED_WINDOW_ACTIVE,
  payload: {
    isActive,
  },
});

export const setChosenProductId = id => ({
  type: SET_CHOSEN_PRODUCT_ID,
  payload: {
    id,
  },
});

export const fetchProductsData = () => dispatch => {
  fetchProducts().then(producsData => dispatch(addProductsDataToStore(producsData)));
};
