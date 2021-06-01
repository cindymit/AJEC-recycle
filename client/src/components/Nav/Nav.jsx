import { NavLink } from "react-router-dom";
import "./Nav.css";

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/create-bike">
      Sell <span className="slash">//</span> Create
    </NavLink>
    <NavLink className="link" to="/log-out">
      Sign Out
    </NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/log-in">
      {" "}
      Login
    </NavLink>
  </>
);

const alwaysOptions = (
  <>
    <NavLink className="link" to="/all-bikes">
      Shop
    </NavLink>
  </>
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

        {/* <div className="links">
          <NavLink className="shop-link" to="/all-bikes">
            Shop
          </NavLink>
          <NavLink className="sell-link" to="/create-bike">
            Sell <span className="slash">//</span> Create
          </NavLink>
        </div> */}
        {/* <div className="authentication">
          <NavLink className="signup-link" to="/sign-up">
            Sign-Up
          </NavLink>
          <NavLink className="login-link" to="/log-in">
            Login
          </NavLink>
        </div> */}
        <div className="links">
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {alwaysOptions}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
