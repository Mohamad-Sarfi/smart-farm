import React from "react";
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
            <div id="register">
            <h4 className="form-title">ثبت باغ جدید</h4>
              <div id="form">
                <input type="text" name="gardenName" placeholder="نام باغ" className="form-control"  onMouseOver={() => console.log("over")}/>
              </div>
              <button className="btn " id="next-btn">بعدی</button>
        </div>
        
      </React.Fragment>
    );
  }
}

export default Register;
