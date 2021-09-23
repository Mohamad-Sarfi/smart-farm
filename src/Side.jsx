import React from "react";
import homeimg from "./images/home.png";
import bhomeimg from "./images/home-black.png";
import insight from "./images/plant.png";
import binsight from "./images/plant-black.png";
import orchard from "./images/orchard.png";
import borchard from "./images/orchard-black.png";
import cart from "./images/shopping-cart.png";
import bcart from "./images/shopping-cart-black.png";
import user from "./images/user.png";
import buser from "./images/user-black.png";
import "./Side.css";

class Side extends React.Component {
  moreInfo(e) {
    const img = e.target.querySelector("img");
    if (img.classList.hasClass("selected")) {
      console.log("yes");
    }
    img.style.backgroundColor = "#6be2aa";
  }

  mouseOut(e) {
    e.target.style.backgroundColor = "white";
    const imgSrc = e.target.getAttribute("src");
    console.log(imgSrc);
  }

  render() {
    return (
      <React.Fragment>
        <div id="side-menu">
          <div
            className="side-menu-item  selected"
            onMouseOver={(e) => this.moreInfo(e)}
            onMouseLeave={(e) => this.mouseOut(e)}
          >
            <img src={homeimg} className="side-image" alt="home" />
          </div>
          <div className="side-menu-item">
            <img src={binsight} className="side-image" alt="home" />
          </div>
          <div className="side-menu-item">
            <img src={borchard} className="side-image" alt="home" />
          </div>
          <div className="side-menu-item">
            <img src={bcart} className="side-image" alt="home" />
          </div>
          <div className="side-menu-item" id="side-menu-item-user">
            <img src={buser} className="side-image" alt="home" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Side;
