import ProductCard from "../components/ProductCard";
// import products from "../data/products-mini";
import productsCausal from "../data/products-mini-causal";


const ProductsBuy = ({ addToCart, setBought, handleCheckout }) => {

  return (
    <div className="web-container">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {productsCausal.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} setBought={setBought} handleCheckout={handleCheckout} />
        ))}
      </div>
    </div>
  );
};

export default ProductsBuy;
