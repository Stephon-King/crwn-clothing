import React from "react";
import './custom-button.style.scss'



const CustomButtom = ({ children, ...otherProps}) => {
    return (
        // if we've got a type or whatever properties
        // from the input, this button'll 
        // receieve that through the spred props

        <button className="custom-button" {...otherProps}>
        
            {children}

        </button>
    )
}

export default CustomButtom;