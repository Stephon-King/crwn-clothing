import React from "react";
import { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {

    // destructing our collections
    const { collections } = this.state;
    return (
      
      <div className="shop-page">
    
        {
          // map our our collection
          collections.map(({id, ...otherCollectionProps}) =>  (
            <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
      </div>
      

    )
  }
}
export default ShopPage;
