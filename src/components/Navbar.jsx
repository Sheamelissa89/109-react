import { NavLink } from "react-router-dom";
import useStore from "../store/useStore";

function NavBar() {
  const userName = useStore((state) => state.userName);
  const cart = useStore((state) => state.cart);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active-link" : "nav-link";

  return (
    <nav className="navbar-container">
      <NavLink className="store-brand" to="/">
        <span className="brand-icon">✦</span>
        <span>Atlas Adventure Shop</span>
      </NavLink>

      <div className="nav-links">
        <NavLink className={getLinkClass} to="/">
          Home
        </NavLink>

        <NavLink className={getLinkClass} to="/catalog">
          Catalog
        </NavLink>

        <NavLink className={getLinkClass} to="/about">
          About
        </NavLink>

        <NavLink className={getLinkClass} to="/contact">
          Contact
        </NavLink>

        <NavLink className={getLinkClass} to="/admin">
          Admin
        </NavLink>

        <NavLink className={getLinkClass} to="/cart">
          Cart
          <span className="cart-count">{cartCount}</span>
        </NavLink>
      </div>

      <div className="nav-user">Welcome, {userName}</div>
    </nav>
  );
}

export default NavBar;