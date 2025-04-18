import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>The Pencil Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/products">Shop</Link></li> */}
        {/* <li><Link to="/products-strat">Shop</Link></li> */}
        {/* Scarcity: */}
        <li><Link to="/products-1">Shop</Link></li> 
        {/* Buy Now: */}
        {/* <li><Link to="/products-2">Shop</Link></li> */}
        {/* Social: */}
        {/* <li><Link to="/products-3">Shop</Link></li> */}
        <li><Link to="/checkout">Checkout</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
