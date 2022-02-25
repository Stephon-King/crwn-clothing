import React from 'react';
import './menu-item.styles.scss';
import { useNavigate } from 'react-router-dom';




const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();

    
    const routeChange = () => {
        navigate(linkUrl);
    }

    // React gives all these markup elements
    // A style element 
    // & style takes an object that has prop 
    // values that's equal to CSS 
    // values that we'd apply to this element
    
    return (<div

        // added a size prop from the directory component
        // so if it's present then add the style to the menu item
        // this final piece comes together in menu-item.styles.scss
        className={`${size} menu-item`}
        onClick={routeChange}>
        

        <div className='background-image' style=
            {{
                // inorder to make this work we'd need
                // to pass in values using JS template strings
                // this div w/ img will scale on hover within parent div
                backgroundImage: `url(${imageUrl})`
            }}
        > </div>
                
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP {title.toUpperCase()} NOW</span>
        </div>

    </div>)
};


export default MenuItem;