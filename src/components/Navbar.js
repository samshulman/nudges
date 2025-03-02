import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>The Pen Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
