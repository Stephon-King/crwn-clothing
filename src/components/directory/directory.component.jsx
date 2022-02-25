import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

// will need to be a class component
// to store the menu items that
// we wanna pass and create our menu items with
// will have a directory which manages the state of that component

class Directory extends React.Component {
  constructor() {
    // super's called to call all the React.Components into
    // our class

    super();

    this.state = {
      // these are the sections for the tiles on home page
      sections: [
        {
          title: "hats",
          imageURL: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "/hats",
        },

        {
          title: "jackets",
          imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "/jackets",
        },

        {
          title: "sneakers",
          imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "/sneakers",
        },

        {
          title: "womens",
          imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "/womens",
        },

        {
          title: "mens",
          imageURL: "https://i.ibb.co/R70vBrQ/mens.png",
          size: "large",
          id: 5,
          linkUrl: "/mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {
          // in our map of an array
          // we're getting a section
          // and we're gonna render
          // the menu item
          // through which we're
          // gonna pass the props in

          // title, imageURL,linkUrl,size
          this.state.sections.map(({ id, title, imageURL,linkUrl,size }) => (
            // don't need to pass id, since we're not using it

            //title={title} imageUrl={imageURL} size={size} linkUrl={linkUrl}
            <MenuItem key={id} title={title} imageUrl={imageURL} size={size} linkUrl={linkUrl} />
          ))
        }
      </div>
    );
  }
}

export default Directory;
