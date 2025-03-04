import { Star } from "lucide-react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      
      {product.image && <img src={product.image} />}
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      {/* Rating section */}
      <div className="rating">
        <Star className="star-icon" size={16} fill="gold" stroke="none" />
        <span>{product.rating}</span>
      </div>

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
