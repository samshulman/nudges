import { useState } from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Products = ({ addToCart }) => {
  return (
    <div>
      <h2>Shop Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
