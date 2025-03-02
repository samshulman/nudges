
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  

  const addToCart = (product) => {
    alert("Item added to cart!")
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
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} clearCart={() => setCart([])} />} />
        


      </Routes>
    </div>
  );
};


export default App;
