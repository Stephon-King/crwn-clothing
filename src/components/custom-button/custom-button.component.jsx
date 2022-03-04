import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    // ************************************************
    //  For Google Button we'd conditionally render
    // a className based off of a prop: isGoogleSignIn
    // Conditionally render via string Interpolation
    // The className of googleSignIn
    // ************************************************

    // if we've got a type or whatever properties
    // from the button, this'll
    // receive that through the spread props
    // ************************************************

    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
