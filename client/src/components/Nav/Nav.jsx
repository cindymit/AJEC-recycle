import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="sell-link" to="/create-bike">
      Sell
    </NavLink>
    <NavLink className="login-out" to="/log-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="signup-link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="login-link" to="/log-in">
      {" "}
      Login
    </NavLink>
  </>
);

const alwaysOptions = (
  <div className="shop-container">
    <NavLink className="shop-link" to="/all-bikes">
      Shop
    </NavLink>
  </div>
);

const Nav = ({ user }) => {
  const [visible, setVisible] = useState(true);
  const [hamburger, setHamburger] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 780) {
        setVisible(true);
        setHamburger(false);
      } else if (window.innerWidth <= 780) {
        setVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo-div">
          <NavLink to="/">
            <img src="https://i.imgur.com/Xtbdmmj.jpg" alt="logo" className="logo" />
          </NavLink>
        </div>
        <div className="menu-button">
          <button
            className="hamburger"
            onClick={() => setHamburger(!hamburger)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
          <div className="menu-list" style={{ display: visible || hamburger ? "flex": "none"}}>
            {user && (
              <div className="welcome-link">Welcome, {user.username}</div>
            )}
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
