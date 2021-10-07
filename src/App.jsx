import React from "react";
import logo from "./images/pistachio.png";
import "./App.css"
import Side from "./Side";
import Register from "./Register";
import RegisterImage from "./RegisterImage";
import RegisterUser from "./RegisterUser";
import addUserIcon from "./images/add-user.png";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./Home/Home";

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            signed_in: false
        }
    }

    signed_in_Privilage = () => {
        this.setState({
            signed_in: true
        })
    }
    
    render() { 
        return (
            <React.Fragment>
                <header >
                    <div id="my-header">
                        <img src={logo} alt="logo" id="logo"/>
                        <a id="title" href="/"> کشت پرداز </a>
                        
                         <div id="sign-in-up">
                            <a href="/sign-in-up"><span className="black-text">وارد شوید</span></a>
                            <img src={addUserIcon} alt="add user" className="small-icon-black" />
                        </div>
                        
                    </div>
                </header>
                
                <div id="componentsDiv" data-reactroot>
                    <Side style={{position: "fixed"}} />
                    <Router>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/sign-in-up" exact component={RegisterUser}/>
                            <Route path="/add-garden" exact component={Register}/>
                        </Switch>
                    </Router>
                </div>
                
            </React.Fragment>
        );
    }
}
 
export default App;