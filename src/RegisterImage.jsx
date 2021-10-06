import React from "react";
import image from './images/register.jpg';
import './Register.css';

class RegisterImage extends React.Component {
    render() { 
        return <div id ="register-img">
            <img src={image} alt="register" className="register-image"/>
        </div>;
    }
}
 
export default RegisterImage;