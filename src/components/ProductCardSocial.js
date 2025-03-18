import { Star } from "lucide-react";

const ProductCardSocial = ({ product, addToCart, handleCheckout }) => {
  const handleBuyNow = () => {
    alert("You bought " + product.name);
    handleCheckout();
  };

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
        <button onClick={() => addToCart(product, false)}>Add to Cart</button>
        

        {/* Conditionally render "Buy Now" button */}
        {product.showButton && (
          <button
            className="buy-now"
          >
            Item selling out quickly!
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCardSocial;
