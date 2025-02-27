import { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      
      {/* Button container to stack buttons vertically */}
      <div className="button-container">
        <button onClick={() => addToCart(product)}>Add to Cart</button>

        {/* Conditionally render "Buy Now" button */}
        {product.showBuyNow && (
          <button
            className="buy-now"
            onClick={() => window.alert(`Purchased: ${product.name}`)}
          >
            Buy Now
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
