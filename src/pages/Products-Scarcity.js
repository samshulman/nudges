import ProductCardScarcity from "../components/ProductCardScarcity";
import products from "../data/products-mini";


const ProductsScarcity = ({ addToCart, handleCheckout }) => {

  return (
    <div className="web-container">
      <h2>Shop Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCardScarcity key={product.id} product={product} addToCart={addToCart} handleCheckout={handleCheckout} />
        ))}
      </div>
    </div>
  );
};

export default ProductsScarcity;
