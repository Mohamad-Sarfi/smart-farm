import React from "react";
import logo from "./images/pistachio.png";
import "./App.css"
import Side from "./Side";
import Register from "./Register";
import RegisterUser from "./RegisterUser";
import addUserIcon from "./images/add-user.png";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from "./Home/Home";
import RegisterImage from "./RegisterImage";
import Dashboard from "./Dashboard/Dashboard";

class App extends React.Component {

    constructor(props){
        super(props)
        
        this.side_states = ["home", "activities", "orchards", "buy", "user"]

        this.state = {
            signed_in: false,
            current_state: this.side_states[0]
        }
    }

    switchToSignedIn = () => {
        this.setState({
            signed_in: true
        })
    }

    changeSideState = sideState => {
        this.setState({
            current_state: this.side_states[sideState]
        })
    }

    
    render() { 
        return (
            <React.Fragment>
                <header >
                    <div id="my-header">
                        <img src={logo} alt="logo" id="logo"/>
                        <a id="title" href="/"> کشت پرداز </a>
                        
                        {
                            !this.state.signed_in && (
                                <div id="sign-in-up">
                                    <a href="/sign-in-up" className="black-text"><span className="black-text">وارد شوید</span></a>
                                    <img src={addUserIcon} alt="add user" className="small-icon-black" />
                                </div>
                            )
                        }

                        {
                            this.state.signed_in && (
                                <div id="sign-in-up" >
                                    <span className="black-text" > خوش آمدید   </span>  
                                </div>
                            )
                        }
                    </div>
                </header>
                
                <div id="componentsDiv" data-reactroot>
                    
                    <Router>
                        <Switch>
                            {!this.state.signed_in && (<Route path="/" exact component={Home}/>)}
                            {this.state.signed_in && (<Route path="/" exact component={Dashboard}/>)}
                            <Route path="/sign-in-up" exact render={props => <RegisterUser authenticate={this.switchToSignedIn} />} />
                            <Route path="/add-garden" exact component={Register}/>
                        </Switch>
                    </Router>
                </div>
                <Side style={{position: "fixed"}} />
            </React.Fragment>
        );
    }
}
 
export default App;