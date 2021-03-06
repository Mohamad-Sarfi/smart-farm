import React from "react";
import "./Register.css"
import emailIcon from "./images/at.png"
import nameIcon from "./images/name.png"
import idIcon from "./images/user-green.png"
import passIcon from "./images/password.png"
import dateIcon from "./images/date.png"
import checkedIcon from "./images/checked.png"
import RegisterImage from "./RegisterImage";
import {Link} from "react-router-dom";

class RegisterUser extends React.Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef();

        this.state = {
            stepNumber: 0,
            userInfo: {
                user_name: "",
                user_birthday: "",
                email: "",
                password: "",
                user_id: ""
            },
            flag: 0
        }

    }

    nextClick = e => {
        this.setState({
            stepNumber: this.state.stepNumber + 1
        })
    }
    backClick = () => {
        const newStep = this.state.stepNumber > 0 ? this.state.stepNumber - 1 : 0;
        this.setState({
            stepNumber: newStep
        })
    }


    handleNameChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                user_name: e.target.value
            }
        })
    }

    handleIDChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                user_id: e.target.value
            }
        })
    }

    validateEmail = e => {
        const inputText = e.target.value;
        if(!(inputText.includes('@'))){
            e.target.classList.add("border");
            e.target.classList.add("border-danger");
            e.target.classList.add("border-4");
            return false
        }
        else {
            e.target.classList.remove("border-danger");
            e.target.classList.remove("border");
            e.target.classList.remove("border-4");
            return true
        }
    }

    finish = e =>{
        this.setState(
            {
                flag : 1
            }
        )
    }

    handleyearChange = e => {
        if (parseInt(e.target.value, 10) < 1300 || parseInt(e.target.value, 10) > 1450){
            
        }

    }

    render() { 
        return (
            <React.Fragment>
                <main id="main-register">
                    <RegisterImage />
                    {
                        this.state.flag === 0 && (
                            <div id="register">
                                <h2 className="form-title">
                                    ?????? ?????? ?????????? ????????
                                </h2>
                                <div id="form">
                                    { this.state.stepNumber === 0 && (
                                        //add users first name and last name
                                        <section>
                                            <img src={nameIcon} alt="email" className="small-icon"/>
                                            <input
                                                type="text"
                                                name="userName"
                                                placeholder="?????? ?? ?????? ????????????????"
                                                className="form-control"
                                                ref={this.inputRef}
                                                onChange={this.handleNameChange}
                                                required
                                            />
                                        </section>
                                    )
                                    }
                                    {this.state.stepNumber === 1 && (
                                            //Add user ID
                                            <section>
                                                <img src={idIcon} alt="email" className="small-icon"/>
                                                <input
                                                    type="text"
                                                    name="userName"
                                                    placeholder="?????? ???????????? ?????? ???? ???????? ????????"
                                                    className="form-control"
                                                    onChange={this.handleIDChange}
                                                />
                                            </section>
                                        )
                                    }
                                    {this.state.stepNumber === 2 && (
                                            //Add email
                                            <section>
                                                    <img src={emailIcon} alt="email" className="small-icon"/>
                                                    <input
                                                        type="email"
                                                        name="userName"
                                                        placeholder="?????????? ?????? ???? ???????? ????????"
                                                        className="form-control"
                                                        onChange={this.handleIDChange}
                                                        onBlur={this.validateEmail}
                                                        ref={this.inputRef}
                                                    />
                                            </section>
                                        )
                                    }
                                    {
                                        this.state.stepNumber === 3 && (
                                            <section>
                                                <span className="medium-title-text">?????????? ????????</span> <img src={dateIcon} alt="birth date" className="small-icon"/>
                                                <form>
                                                <input
                                                    type="number"
                                                    name="birthDay"
                                                    placeholder="?????? ????????"
                                                    className="form-control m-1"
                                                    ref={this.inputRef}
                                                    onChange={this.handleNameChange}
                                                    min="1"
                                                    max="31"
                                                />
                                                <select
                                                    type="text"
                                                    list="monthsList"
                                                    name="birthMonth"
                                                    placeholder="?????? ????????"
                                                    className="form-control m-1"
                                                    onChange={this.handleNameChange}
                                                    id="monthSelect"
                                                >
                                                    <option>  ?????????????? </option>
                                                    <option>  ???????????????? </option>
                                                    <option>  ?????????? </option>
                                                    <option> ?????? </option>
                                                    <option>  ?????????? </option>
                                                    <option>  ???????????? </option>
                                                    <option>  ?????? </option>
                                                    <option>  ???????? </option>
                                                    <option>  ?????? </option>
                                                    <option>  ???? </option>
                                                    <option>  ???????? </option>
                                                    <option>  ?????????? </option>
                                                    
                                                </select>
                                                <input
                                                    type="number"
                                                    name="birthYear"
                                                    placeholder="?????? ????????"
                                                    className="form-control m-1"
                                                    ref={this.inputRef}
                                                    onChange={this.handleyearChange}
                                                    min="1300"
                                                    max="1450"
                                                />
                                                </form> 
                                            </section>
                                        )
                                    }
                                    {
                                        this.state.stepNumber === 4 && (
                                            <section>
                                                <img src={passIcon} alt="password" className="small-icon"/>
                                                <input
                                                    type="password"
                                                    name="userName"
                                                    placeholder="?????? ???????? ???? ???????? ????????"
                                                    className="form-control m-1"
                                                    onChange={this.handleIDChange}
                                                    onBlur={this.validatePassword}
                                                    ref={this.inputRef}
                                                />
                                                <input
                                                    type="password"
                                                    name="userName"
                                                    placeholder="?????? ???????? ???? ?????????? ????????"
                                                    className="form-control m-1"
                                                    onChange={this.handleIDChange}
                                                    onBlur={this.validatePassword}
                                                    ref={this.inputRef}
                                                />
                                            </section>
                                        )
                                    }
                                </div>

                                <div id="btn-div">
                                    <button
                                        className="btn"
                                        id="previous-btn"
                                        onClick={this.backClick}
                                    >
                                    ????????
                                    </button>
                                    {this.state.stepNumber < 4 && (
                                    <button className="btn " id="next-btn" onClick={this.nextClick}>
                                        ????????
                                    </button>
                                    )}
                                    {this.state.stepNumber === 4 && (
                                    <button className="btn " id="finish-btn" onClick={this.finish}>
                                        ??????
                                    </button>
                                    )}
                                </div>
                            </div>
                        )
                    }
                    {
                        this.state.flag === 1 && (
                            <div className="box-container">
                            <Link to="/">
                                <h3 className="finish-text">
                                    ?????? ?????? ???? ???????????? ?????????? ????
                                </h3>
                                <img src={checkedIcon} alt="Successfully registered" className="location-icon" id="finish-icon" onClick={this.props.authenticate}/>
                            </Link>
                            
                        </div>
                        )
                    }
                                
            </main>
                
            </React.Fragment>
        )
    }
}
 
export default RegisterUser;