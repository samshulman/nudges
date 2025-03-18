import ProductCard from "../components/ProductCard";
import products from "../data/products-mini";


const ProductsMini = ({ addToCart, handleCheckout }) => {

  return (
    <div className="web-container">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} handleCheckout={handleCheckout} />
        ))}
      </div>
    </div>
  );
};

export default ProductsMini;
