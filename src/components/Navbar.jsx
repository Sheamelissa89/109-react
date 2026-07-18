import { NavLink } from "react-router-dom";

function Navbar() {
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
      </nav>
    </header>
  );
}

export default Navbar;