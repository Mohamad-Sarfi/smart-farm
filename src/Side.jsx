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

  changeImgSrcToSlected(element) {
      const elementId = element.getAttribute("id");
      let newSrc;
      eval("newSrc = " + elementId.toString());
      console.log(typeof elementId);
      //element.setAttribute("src", img1);
  }

  addCSSClass = (element, className) => {
      element.classList.add(className);
  }

  removeCSSClass = (element, className) => {
    element.classList.remove(className);
  }

  checkSelected = (element) => {
    return element.classList.contains("selected");
  }

  mouseIn = (e) => {
    e.stopPropagation();
    console.log(e.target.tagName !== 'img');
    if (!this.checkSelected(e.target) && e.target.tagName !== 'img') {
      e.target.style.backgroundColor = "#6be2aa";
      this.addCSSClass(e.target, "expanded");
      const description = e.target.lastChild;
      this.removeCSSClass(description, "hide");
      this.addCSSClass(description, "show-inline")
      //this.changeImgSrcToSlected(img);
    }
  }

  mouseOut = (e) => {
    e.stopPropagation();
    if (!this.checkSelected(e.target) && e.target.tagName !== 'img') {
      e.target.style.backgroundColor = "white";
      this.removeCSSClass(e.target, "expanded")
      const description = e.target.lastChild;
      this.removeCSSClass(description, "show-inline")
      this.addCSSClass(description, "hide")
      //this.changeImgSrcToSlected(img)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="side-menu">
          <div
            className="side-menu-item  selected"
            onMouseEnter={this.mouseIn}
            onMouseLeave={this.mouseOut}
          >
            <img src={homeimg} className="side-image" alt="home" id="home" />
            <h4 className="hide expanded-info"> خانه </h4>
          </div>
          <div
            className="side-menu-item"
            onMouseEnter={(e) => this.mouseIn(e)}
            onMouseLeave={(e) => this.mouseOut(e)}
          >
            <img
              src={binsight}
              className="side-image"
              alt="home"
              id="insight"
            />
            <h4 className="hide expanded-info"> فعالیت ها </h4>
          </div>
          <div
            className="side-menu-item"
            onMouseEnter={this.mouseIn}
            onMouseLeave={this.mouseOut}
          >
            <img
              src={borchard}
              className="side-image"
              alt="home"
              id="orchard"
            />
            <h4 className="hide expanded-info"> باغ ها </h4>
          </div>
          <div
            className="side-menu-item"
            onMouseEnter={this.mouseIn}
            onMouseLeave={(e) => this.mouseOut(e)}
          >
            <img src={bcart} className="side-image" alt="home" id="cart" />
            <h4 className="hide expanded-info"> خرید </h4>
          </div>
          <div
            className="side-menu-item-user side-menu-item"
            onMouseEnter={this.mouseIn}
            onMouseLeave={(e) => this.mouseOut(e)}
          >
            <img src={buser} className="side-image" alt="home" id="user"/>
            <h4 className="hide expanded-info"> پروفایل کاربر </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Side;
