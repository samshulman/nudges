import ProductCardScarcity from "../components/ProductCardScarcity";
// import products from "../data/products-mini";
import productsCausal from "../data/products-mini-causal";


const ProductsScarcity = ({ addToCart, handleCheckout }) => {

  return (
    <div className="web-container">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {productsCausal.map((product) => (
          <ProductCardScarcity key={product.id} product={product} addToCart={addToCart} handleCheckout={handleCheckout} />
        ))}
      </div>
    </div>
  );
};

export default ProductsScarcity;
