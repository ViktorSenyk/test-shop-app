import React from 'react';

import './productDetailsWindow.scss';

function ProductDetailsWindow({ productsList, chosenProductId, setIsProductsDetailsActive }) {
  const { imageUrl, name, count, size, weight, comments } = productsList.find(
    ({ id }) => id === chosenProductId,
  );

  return (
    <div className="product-details__overflow">
      <div className="product-details__content">
        <button
          className="product-details__close-btn"
          onClick={() => setIsProductsDetailsActive(false)}
        >
          x
        </button>
        <img className="product-details__img" src={imageUrl} alt="img" />
        <h5 className="product-details__name">{name}</h5>
        <p className="product-details__count">Count: {count}</p>
        <p className="product-details__size">Size: {`${size.width} x ${size.height}`}</p>
        <p className="product-details__weight">Weight: {weight}</p>
        <hr />
        {comments.length > 0 &&
          comments.map(({ id, description, date }) => (
            <p className="product-details__comment" key={id}>
              {`Description: ${description} (date: ${date})`}
            </p>
          ))}
      </div>
    </div>
  );
}

export default ProductDetailsWindow;
