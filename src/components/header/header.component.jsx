import React from "react";
import './header.scss';
import { Link } from "react-router-dom";
// ReactComponent => code for importing SVG 
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = () => {
    return (
        // Hello I'm a Header
        <div className="header">
            
            <Link className='logo-container' to="/">
                <Logo className="logo" />
            </Link>

            <div className="options">
                
                <Link className='option' to='/shoppage'>
                SHOP
                </Link>
                
                <Link className='option' to='/contact'>
                CONTACT
                </Link>
                
                <Link className='option' to='/signin'>
                SIGN IN
                </Link>

            </div>

        </div>
    );
}

export default Header;