import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useState, useEffect } from "react";


const Products = ({ addToCart }) => {
  const [shuffledProducts, setShuffledProducts] = useState([]);

  useEffect(() => {
    // Shuffle the products once when the component mounts
    const shuffled = [...products].sort(() => Math.random() - 0.5);
      setShuffledProducts(shuffled);
    }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div className="web-container">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {shuffledProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
