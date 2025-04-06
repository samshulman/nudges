import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>The Pencil Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/products">Shop</Link></li> */}
        {/* <li><Link to="/products-strat">Shop</Link></li> */}
        <li><Link to="/products-scarcity">Shop</Link></li> 
        <li><Link to="/products-buynow">Shop</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
