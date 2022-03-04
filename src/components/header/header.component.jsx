import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";
// ReactComponent => code for importing SVG
import { ReactComponent as Logo } from "../../assets/crown.svg";

// destructure the currentUser prop
// from app
const Header = ({ currentUser }) => {
  return (
    // Hello I'm a Header
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shoppage">
          SHOP
        </Link>

        <Link className="option" to="/contact">
          CONTACT
        </Link>

              {
                  currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    {" "}
                    SIGN OUT { currentUser.displayName.toUpperCase() }
                </div>
                ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
                  )}
              
      </div>
    </div>
  );
};

export default Header;
