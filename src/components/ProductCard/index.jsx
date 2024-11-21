import React from 'react';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-category">{product.category}</div>
      <h3 className="product-title">{product.title}</h3>
      <div className="bottom_row">
      <div className="product-price">${product.price}</div>
      <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
