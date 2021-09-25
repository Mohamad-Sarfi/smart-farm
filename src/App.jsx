import React from "react";
import logo from "./images/pistachio.png";
import "./App.css"
import Side from "./Side";
import Register from "./Register";
import RegisterImage from "./RegisterImage";

class App extends React.Component {
    
    something = () => {

    }
    
    render() { 

        return (
            <React.Fragment>
                <header >
                    <div id="my-header">
                        <img src={logo} alt="logo" id="logo"/>
                        <a id="title" href="/"> کشت پرداز </a>
                    </div>
                </header>
                
                <div id="componentsDiv" data-reactroot>
                    <Side />
                    <RegisterImage />
                    <Register />
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default App;