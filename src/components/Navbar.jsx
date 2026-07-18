import { NavLink } from "react-router-dom";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import useStore from "../store/useStore";

function Navbar() {
  const userName = useStore((state) => state.userName);
  const cart = useStore((state) => state.cart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="site-header">
      <nav className="navbar">
        <h1 className="logo">Atlas Adventure Shop</h1>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/catalog">
            Catalog
          </NavLink>

          <NavLink to="/about">
            About
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <NavLink to="/admin">
            Admin
          </NavLink>
        </div>

        <div className="nav-account">
          <div className="nav-user">
            <FaUserCircle />
            <span>Welcome, {userName}</span>
          </div>

          <div className="nav-cart">
            <FaShoppingCart />
            <span>Cart: {totalItems}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;