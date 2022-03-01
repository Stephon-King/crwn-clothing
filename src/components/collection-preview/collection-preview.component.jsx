import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview-styles.scss';


// functional component
const CollectionPreview = ({title, items}) => {
   
    return (
        <div className="collection-preview">
            
            <h1 className="title">{title.toUpperCase()}</h1>
            
            <div className="preview">
                {
                    // map through items, & filter it's data so there's 
                    // only < 4 items in a row
                    items
                        .filter((item, index) => index < 4)
                        .map(({id, ...otherItemProps}) => ( 
                        <CollectionItem  key={id} {...otherItemProps} />
                                
                                
                        
                    ))}
            </div>

        </div>
    );
}

export default CollectionPreview;