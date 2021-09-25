import React from "react";
import "./Register.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Register extends React.Component {
  constructor(props){
      super(props)
      this.inputRef = React.createRef()

      this.state = {
        inputValue: '',
        steps: []
      }
  }

  nextClick = () => {
      if (!this.inputValidation()){
        this.inputRef.current.style.borderColor = 'red';
      }
      else this.incrementStepState();
  }

  incrementStepState = () => {
    const newState = this.state.steps;
    newState.push(0);
    this.setState({
      steps: newState
    })
    console.log(this.state.steps);
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  inputValidation = () => this.state.inputValue === '' ? false : true; 

  render() {
    return (
      <React.Fragment>
        <div id="register">
          <h4 className="form-title">ثبت باغ جدید</h4>
          <div id="form">
            <input
              type="text"
              name="gardenName"
              placeholder="نام باغ"
              className="form-control"
              ref={this.inputRef}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="progress" className="container">
            <div className="row align-items-center">
              {this.state.steps.map((e,i) => {
                return <div className="col-2 progress-item progressed" key={i}></div>;
              })}
            </div>
          </div>
          <button className="btn " id="next-btn" onClick={this.nextClick}>
            بعدی
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
