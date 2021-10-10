import React from "react";
import "./Register.css";
import locationIcon from "./images/placeholder.png";
import "bootstrap/dist/css/bootstrap.min.css";
import checkedIcon from "./images/checked.png";
import RegisterImage from "./RegisterImage";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    this.state = {
      steps: [],
      stepNumber: 0,
      gardenInfo: {
        garden_name: "",
        age: 0,
        peyvands: [],
        location: {
          latitude: 0.0,
          longitude: 0.0,
          elevation: "n/a",
        },
        average_product: 0,
      },
      flag: 0,
    };
  }

  nextClick = () => {
    if (!this.inputValidation()) {
      this.inputRef.current.style.borderColor = "red";
    } else {
      this.incrementStepState();
    }
  };

  backClick = () => {
    this.decrementStepState();
  };

  decrementStepState = () => {
    const newState = this.state.steps;
    newState.pop(0);

    this.setState({
      steps: newState,
      stepNumber: this.state.stepNumber - 1,
    });
  };

  incrementStepState = () => {
    const newState = this.state.steps;
    newState.push(0);

    this.setState({
      steps: newState,
      stepNumber: this.state.stepNumber + 1,
    });
  };

  handleNameChange = (e) => {
    const gardenName = e.target.value;
    this.setState({
      gardenInfo: {
        ...this.state.gardenInfo,
        garden_name: gardenName,
      },
    });
  };

  handleAgeChange = (e) => {
    const gardenAge = e.target.value;
    this.setState({
      gardenInfo: {
        ...this.state.gardenInfo,
        garden_age: gardenAge,
      },
    });
  };

  handleProductChange = (e) => {
    const averageProduct = e.target.value;
    this.setState({
      gardenInfo: {
        ...this.state.gardenInfo,
        average_product: averageProduct,
      },
    });
  };

  showBackBtn = () => {
    console.log(`current step is ${this.state.stepNumber}`);
    if (this.state.stepNumber >= 1) {
      return "inline";
    } else {
      return "none";
    }
  };

  peyvandSelect = (e) => {
    const peyvand = e.target.value;
    const peyvandList = this.state.gardenInfo.peyvands;
    peyvandList.push(peyvand);
    this.setState({
      gardenInfo: {
        ...this.state.gardenInfo,
        peyvands: peyvandList,
      },
    });
    this.addPeyvand();
  };

  inputValidation = () => (this.state.inputValue === "" ? false : true);

  peyvandClickHandle = (e) => {
    const peyvandList = this.state.gardenInfo.peyvands;
    console.log(e.target.innerText);
    const newPeyvandList = peyvandList.splice(
      peyvandList.indexOf(e.target.innerText),
      1
    );
    console.log(newPeyvandList.toString());
    this.setState({
      peyvands: peyvandList,
    });
  };

  addPeyvand = (peyvand) => {
    const peyvands = this.state.gardenInfo.peyvands;
    return peyvands.map((e, i) => {
      return (
        <span
          className="badge bg-primary m-1 p-2"
          key={i}
          onClick={this.peyvandClickHandle}
        >
          {e}
        </span>
      );
    });
  };

  finish = (e) => {
    this.setState({
      flag: 1,
    });

  };

  render() {
    return (
      <React.Fragment>
        { this.state.flag===0 && (
        <div id="main-register">
            <RegisterImage />
            <div id="register">  
            <h4 className="form-title">ثبت باغ جدید</h4>
            <div id="form">
              {this.state.stepNumber === 0 && (
                <section>
                  <input
                    type="text"
                    name="gardenName"
                    placeholder="نام باغ"
                    className="form-control"
                    ref={this.inputRef}
                    onChange={this.handleNameChange}
                    required
                  />
                </section>
              )}
              {this.state.stepNumber === 1 && (
                <section>
                  <input
                    type="number"
                    name="gardenAge"
                    placeholder="سن تقریبی باغ"
                    className="form-control"
                    ref={this.inputRef}
                    onChange={this.handleAgeChange}
                  />
                </section>
              )}

              {this.state.stepNumber === 2 && (
                <section className="peyvand">
                  <select
                    name="peyvand"
                    id="peyvand-select"
                    onChange={this.peyvandSelect}
                    className="register-text select-form"
                  >
                    <option>اکبری</option>
                    <option>احمد آقایی</option>
                    <option>شاهپسند</option>
                    <option>اوحدی</option>
                    <option>خنجری</option>
                  </select>
                  <label for="peyvand-select" className="register-text">
                    پیوندهای باغ
                  </label>
                  <div className="added-peyvands">{this.addPeyvand()}</div>
                </section>
              )}
              {this.state.stepNumber === 3 && (
                <section>
                  <h3 className="unit">موقعیت مکانی باغ را مشخص کنید</h3>
                  <img
                    src={locationIcon}
                    alt="Location icon"
                    className="location-icon"
                  />
                </section>
              )}

              {this.state.stepNumber === 4 && (
                <section>
                  <input
                    type="number"
                    name="averageProduct"
                    placeholder="میانگین محصولات باغ در چند سال اخیر"
                    className="form-control"
                    min="0"
                    onChange={this.handleProductChange}
                  />
                  <h3 className="unit">1000 کیلو</h3>
                </section>
              )}
            </div>
            <div className="progress-div">
              {this.state.steps.map((e, i) => {
                return <div className="progress-item progressed" key={i}></div>;
              })}
            </div>
            <div id="btn-div">
              <button
                className="btn"
                id="previous-btn"
                onClick={this.backClick}
                style={{ display: this.showBackBtn() }}
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
        </div>)
        }
        {
          this.state.flag === 1 && (
            <div className="box-container">
              <h3 className="finish-text">
                ثبت نام با موفقیت انجام شد
              </h3>
              <img src={checkedIcon} alt="Successfully registered" className="location-icon" id="finish-icon" />
            </div>
          )
        }
      </React.Fragment>
    );
  }
}

export default Register;
