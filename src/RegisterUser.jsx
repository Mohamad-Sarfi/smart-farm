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
        this.setState({
            stepNumber: this.state.stepNumber - 1
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
                                    ثبت نام کاربر جدید
                                </h2>
                                <div id="form">
                                    { this.state.stepNumber === 0 && (
                                        //add users first name and last name
                                        <section>
                                            <img src={nameIcon} alt="email" className="small-icon"/>
                                            <input
                                                type="text"
                                                name="userName"
                                                placeholder="نام و نام خانوادگی"
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
                                                    placeholder="نام کاربری خود را وارد کنید"
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
                                                        placeholder="ایمیل خود را وارد کنید"
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
                                                <span className="medium-title-text">تاریخ تولد</span> <img src={dateIcon} alt="birth date" className="small-icon"/>
                                                <form>
                                                <input
                                                    type="number"
                                                    name="birthDay"
                                                    placeholder="روز تولد"
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
                                                    placeholder="ماه تولد"
                                                    className="form-control m-1"
                                                    onChange={this.handleNameChange}
                                                    id="monthSelect"
                                                >
                                                    <option>  فروردین </option>
                                                    <option>  اردیبهشت </option>
                                                    <option>  خرداد </option>
                                                    <option> تیر </option>
                                                    <option>  مرداد </option>
                                                    <option>  شهریور </option>
                                                    <option>  مهر </option>
                                                    <option>  آبان </option>
                                                    <option>  آذر </option>
                                                    <option>  دی </option>
                                                    <option>  بهمن </option>
                                                    <option>  اسفند </option>
                                                    
                                                </select>
                                                <input
                                                    type="number"
                                                    name="birthYear"
                                                    placeholder="سال تولد"
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
                                                    placeholder="رمز عبور را وارد کنید"
                                                    className="form-control m-1"
                                                    onChange={this.handleIDChange}
                                                    onBlur={this.validatePassword}
                                                    ref={this.inputRef}
                                                />
                                                <input
                                                    type="password"
                                                    name="userName"
                                                    placeholder="رمز عبور را تکرار کنید"
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
                                    قبلی
                                    </button>
                                    {this.state.stepNumber < 4 && (
                                    <button className="btn " id="next-btn" onClick={this.nextClick}>
                                        بعدی
                                    </button>
                                    )}
                                    {this.state.stepNumber === 4 && (
                                    <button className="btn " id="finish-btn" onClick={this.finish}>
                                        ثبت
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
                                    ثبت نام با موفقیت انجام شد
                                </h3>
                                <img src={checkedIcon} alt="Successfully registered" className="location-icon" id="finish-icon" />
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