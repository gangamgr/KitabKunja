import React from 'react';

interface ProductProps {
  title: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ title, price, imageUrl }:any) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <h3>{title}svfafv</h3>
      <p>₹{price}.00</p>
    </div>
  );
};

export default Product;