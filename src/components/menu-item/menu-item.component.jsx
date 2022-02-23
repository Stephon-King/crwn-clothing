import React from 'react';
import './menu-item.styles.scss';


// dynamically add title by passing it in as a prop
// destructing the title from props {title} 
// my guess is so we'd be able to get more like this 

const MenuItem = ({title, imageUrl, size}) => (

// React gives all these markup elements
// A style element 
// & style takes an object that has prop 
// values that's equal to CSS 
// values that we'd apply to this element
    
    <div        
        // added a size prop from the directory component
        // so if it's present then add the style to the menu item
        // this final piece comes together in menu-item.styles.scss
        className={`${size} menu-item`}>
        

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

</div>
)


export default MenuItem;