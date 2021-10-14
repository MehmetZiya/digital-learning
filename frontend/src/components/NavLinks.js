import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";

const NavLinks = ({handleLinkClick}) => {
  return (
    <Fragment>
      <NavLink onClick={handleLinkClick} to="/home" activeClassName= "active" className = "navItem">
        Home
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/categories" activeClassName="active" className ="navItem">
        Categories
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/wishlist" activeClassName="active" className ="navItem">
        Wish List
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/register" activeClassName="active" className ="navItem">
        Register
      </NavLink>

      <NavLink onClick={handleLinkClick} to="/login" activeClassName="active" className ="navItem">
        Login
      </NavLink>

    </Fragment>
  );
};

export default NavLinks;
