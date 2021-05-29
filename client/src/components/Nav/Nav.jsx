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
          <NavLink className="shop-link" to="/all-bikes">
            Shop
          </NavLink>
          <NavLink className="sell-link" to="/create-bike">
            Sell <span className="slash">//</span> Create
          </NavLink>
        </div>
        <div className="authentication">
          <NavLink className="signup-link" to="/sign-up">
            Sign-Up
          </NavLink>
          <NavLink className="login-link" to="/log-in">
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
