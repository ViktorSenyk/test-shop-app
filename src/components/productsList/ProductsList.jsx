import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as shopSelectors from '../../redux/shop.selectors';
import {
  fetchProductsData,
  setIsProductsDetailsActive,
  setIsProductCreatedWindowActive,
  setChosenProductId,
} from '../../redux/shop.actions';

import ProductItem from '../productItem/ProductItem';
import ProductDetailsWindow from '../productDetailsWindow/ProductDetailsWindow';
import ProductCreatedWindow from '../productCreatedWindow/ProductCreatedWindow';

import './productsList.scss';

function ProductsList({
  productsList,
  fetchProductsData,
  isProductDetailsActive,
  setIsProductsDetailsActive,
  isProductCreatedWindowActive,
  setIsProductCreatedWindowActive,
  chosenProductId,
  setChosenProductId,
}) {
  useEffect(() => {
    fetchProductsData();
  }, [fetchProductsData]);

  const sortedProductsList = productsList.sort((a, b) => b.count - a.count);

  return (
    <section className="products-list">
      <button
        className="products-list__create-btn"
        onClick={() => {
          setIsProductCreatedWindowActive(true);
        }}
      >
        ADD NEW PRODUCT ?
      </button>
      <ul className="products-list__list">
        {sortedProductsList.map(productInfo => (
          <ProductItem
            key={productInfo.id}
            productInfo={productInfo}
            fetchProductsData={fetchProductsData}
            setIsProductsDetailsActive={setIsProductsDetailsActive}
            setChosenProductId={setChosenProductId}
          />
        ))}
      </ul>

      {isProductDetailsActive && (
        <ProductDetailsWindow
          chosenProductId={chosenProductId}
          productsList={productsList}
          setIsProductsDetailsActive={setIsProductsDetailsActive}
        />
      )}

      {isProductCreatedWindowActive && (
        <ProductCreatedWindow
          setIsProductCreatedWindowActive={setIsProductCreatedWindowActive}
          fetchProductsData={fetchProductsData}
        />
      )}
    </section>
  );
}

const mapState = state => ({
  productsList: shopSelectors.producsListSelector(state),
  isProductDetailsActive: shopSelectors.isProductDetailsActiveSelector(state),
  isProductCreatedWindowActive: shopSelectors.isProductCreatedWindowActiveSelector(state),
  chosenProductId: shopSelectors.chosenProductIdSelector(state),
});

const mapDispatch = {
  fetchProductsData,
  setIsProductsDetailsActive,
  setIsProductCreatedWindowActive,
  setChosenProductId,
};

export default connect(mapState, mapDispatch)(ProductsList);
