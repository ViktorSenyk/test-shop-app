import React, { useState } from 'react';
import { createNewProduct } from '../../gateway/products';

import './productCreatedWindow.scss';

function ProductCreatedWindow({ setIsProductCreatedWindowActive, fetchProductsData }) {
  const [newProductInfo, setNewProductInfo] = useState({
    id: Math.random(),
    imageUrl: '',
    name: '',
    count: '',
    size: { width: '', height: '' },
    weight: '',
    comments: [],
  });

  const onCreate = e => {
    e.preventDefault();
    createNewProduct(newProductInfo).then(() => fetchProductsData());
    setIsProductCreatedWindowActive(false);
  };

  return (
    <div className="product-created-window__overflow">
      <div className="product-created-window__content">
        <h2 className="product-created-window__title">New product Creator</h2>
        <form>
          <input
            className="product-created-window__input"
            type="text"
            placeholder="name..."
            value={newProductInfo.name}
            onChange={e => setNewProductInfo({ ...newProductInfo, name: e.target.value })}
          />
          <input
            className="product-created-window__input"
            type="text"
            placeholder="img ulr..."
            value={newProductInfo.imageUrl}
            onChange={e => setNewProductInfo({ ...newProductInfo, imageUrl: e.target.value })}
          />
          <input
            className="product-created-window__input"
            type="number"
            placeholder="count..."
            value={newProductInfo.count}
            onChange={e => setNewProductInfo({ ...newProductInfo, count: e.target.value })}
          />
          <input
            className="product-created-window__input"
            type="number"
            placeholder="size: width..."
            value={newProductInfo.size.width}
            onChange={e =>
              setNewProductInfo({
                ...newProductInfo,
                size: { ...newProductInfo.size, width: e.target.value },
              })
            }
          />
          <input
            className="product-created-window__input"
            type="number"
            placeholder="size: height..."
            value={newProductInfo.size.height}
            onChange={e =>
              setNewProductInfo({
                ...newProductInfo,
                size: { ...newProductInfo.size, height: e.target.value },
              })
            }
          />
          <input
            className="product-created-window__input"
            type="text"
            placeholder="weight..."
            value={newProductInfo.weight}
            onChange={e => setNewProductInfo({ ...newProductInfo, weight: e.target.value })}
          />
          <button
            className="product-created-window__input product-created-window__btn_green"
            type="submit"
            onClick={e => onCreate(e)}
          >
            Create
          </button>
          <button
            className="product-created-window__btn"
            onClick={e => {
              e.preventDefault();
              setIsProductCreatedWindowActive(false);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductCreatedWindow;
