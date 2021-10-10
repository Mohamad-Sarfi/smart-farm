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
  constructor(){
    super()

    this.mouseIn = this.mouseIn.bind(this);
  }

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

  mouseIn(e) {
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
            </svg>
            <h4 className="hide expanded-info"> خانه </h4>
          </div>
          <div
            className="side-menu-item"
            onMouseEnter={this.mouseIn}
            onMouseLeave={(e) => this.mouseOut(e)}
            onClick={this.mouseIn}
          >
            <img
              src={binsight}
              className="side-image"
              alt="home"
              id="insight"
              onMouseEnter={e => e.preventDefault()}
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
            {
              
            }
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
            <h4 className="hide expanded-info"> خرید </h4>
          </div>
          <div
            className="side-menu-item-user side-menu-item"
            onMouseEnter={this.mouseIn}
            onMouseLeave={(e) => this.mouseOut(e)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            <h4 className="hide expanded-info"> پروفایل کاربر </h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Side;
