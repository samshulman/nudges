import { useState } from "react";

const Checkout = ({ cart, clearCart }) => {
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleCheckout = () => {
    if (customerInfo.name && customerInfo.email && cart.length > 0) {
      setOrderPlaced(true);
      clearCart(); // Empty the cart after checkout
    } else {
      alert("Please fill out your details and add items to your cart.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      {orderPlaced ? (
        <p>Thank you, {customerInfo.name}! Your order has been placed.</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty. Add items to checkout.</p>
          ) : (
            <div>
              <h3>Order Summary</h3>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <h3>Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</h3>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={customerInfo.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={customerInfo.email}
                  onChange={handleChange}
                />
                <button onClick={handleCheckout}>Place Order</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
