import React from "react";
import logo from "./images/pistachio.png";
import "./App.css"
import Side from "./Side";
import Register from "./Register";

class App extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <header >
                    <div id="my-header">
                        <img src={logo} alt="logo" id="logo"/>
                        <a id="title" href="/"> کشت پرداز </a>
                    </div>
                </header>
                <main id="componentsDiv">
                    <Side />
                    <Register />
                </main>
                
            </React.Fragment>
        );
    }
}
 
export default App;