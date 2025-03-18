import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductsStrat from "./pages/Products-Strat";
import ProductsMini from "./pages/Products-Mini";
import Checkout from "./pages/Checkout";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product, isBuyNow) => {
    if (!isBuyNow) {
      alert("Item added to cart!")
    }
    
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
  
      if (existingItem) {
        // If product exists, update quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If product is new, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleCheckoutFromProduct = () => {
    // Set orderPlaced to true and navigate to checkout page
    window.location.hash = '#/checkout';

  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} handleCheckout={handleCheckoutFromProduct} />} />
        <Route path="/products-strat" element={<ProductsStrat addToCart={addToCart} />} />
        <Route path="/products-mini" element={<ProductsMini addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} clearCart={() => setCart([])} />} />
      </Routes>
    </div>
  );
};


export default App;
