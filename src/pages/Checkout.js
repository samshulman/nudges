import { useState } from "react";
import products from "../data/products";

const Checkout = ({ cart, setCart, clearCart }) => {
  const [customerInfo, setCustomerInfo] = useState({ name: "", email: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  // Function to update quantity of an item
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevents zero or negative values

    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  function saveData() {
    console.log("Saving data");
    fetch("https://sshulman.pythonanywhere.com/save-json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: cart,
        products: products,
        dir_path: "data"
      })
    })
    .then(response => response.json())
    .then(data => console.log("Success:", data))
    .catch(error => console.error("Error:", error));
  }

  function handleCheckout() {
    saveData();
    setOrderPlaced(true);
    clearCart(); // Empty the cart after checkout
    
  };

  return (
    <div className="web-container">
      <h2>Checkout</h2>
      {orderPlaced ? (
        <p>Thank you! Your order has been placed.</p>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>Your cart is empty. Add items to checkout.</p>
          ) : (
            <div>
              <h3>Order Summary</h3>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <span>{item.name} - ${item.price}</span>
                    
                    {/* Quantity Controls */}
                    <div className="quantity-controls">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>

                    {/* Remove Item Button */}
                    <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <h3>Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</h3>

              
              {/* Checkout Form */}
              <div>
                
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
