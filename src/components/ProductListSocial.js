import ProductCardSocial from "./ProductCardSocial";
import products from "../data/products";

const ProductsSocial = ({ addToCart, handleCheckout }) => {
  return (
    <div>
      <h2>Shop Products</h2>
      <div className="product-grid">
        
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} handleCheckout={handleCheckout} />
        ))}
      </div>
    </div>
  );
};

export default ProductsSocial;
