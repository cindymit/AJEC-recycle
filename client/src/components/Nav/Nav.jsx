import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-div">
          <NavLink className="logo" to="/">
          Re-Cycle
          </NavLink>
        </div>
          <div className="links">
            <NavLink className="shop-link" to="/bikes">
              Shop
            </NavLink>
            <NavLink className="create-link" to="/createbike">
              Sell
            </NavLink>
          </div>
      </div>
    </nav>
  );
};

export default Nav;