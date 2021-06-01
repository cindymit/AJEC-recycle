import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="sell-link" to="/create-bike">
      Sell
    </NavLink>
    <NavLink className="login-link" to="/log-out">
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
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-div">
          <NavLink className="logo" to="/">
            Re-Cycle
          </NavLink>
        </div>

        {/* <div > */}
          {user && <div className="welcome-link">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Nav;
