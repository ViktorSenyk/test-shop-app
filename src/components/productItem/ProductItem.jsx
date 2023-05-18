import React from 'react';
import { deleteProduct } from '../../gateway/products';

import './productItem.scss';

function ProductItem({
  productInfo,
  fetchProductsData,
  setIsProductsDetailsActive,
  setChosenProductId,
}) {
  const { id, imageUrl, name, count } = productInfo;

  const onDelete = e => {
    e.stopPropagation();
    deleteProduct(id).then(() => fetchProductsData());
  };

  return (
    <>
      <li
        className="product-item"
        onClick={() => {
          setIsProductsDetailsActive(true);
          setChosenProductId(id);
        }}
      >
        <button className="product-item__delete-btn" onClick={e => onDelete(e)}>
          x
        </button>
        <img className="product-item__img" src={imageUrl} alt="img" />
        <h6 className="product-item__title">{name}</h6>
        <p className="product-item__count">Count: {count}</p>
      </li>
    </>
  );
}

export default ProductItem;
