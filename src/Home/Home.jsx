import React from "react";
import "./HomeStyle.css";
import AIIcon from "../images/ai.png"
import smartIcon from "../images/ai-farm.jpg"

class Home extends React.Component {

    render() { 
        return (
            <React.Fragment>
                <div className="top">
                    <section className="header">
                        <h4 className="my-text"> مزرعه هوشمند -   </h4>
                        <h1 className="my-text">کشت پرداز</h1>
                    </section>
                    <div id="wide-pic"></div>    
                    <div id="cards">
                        <div className="card">
                            <img src={AIIcon} alt="A.I" className="medium-icon" />
                            <h4 className="my-text">هوش مصنوعی</h4>
                        </div>
                        <div className="card">
                            <img src={AIIcon} alt="A.I" className="medium-icon" />
                            <h4 className="my-text">افزایش محصولات</h4>
                        </div>
                        <div className="card">
                            <img src={AIIcon} alt="A.I" className="medium-icon" />
                            <h4 className="my-text"> حفظ منابع </h4>
                        </div>
                    </div>

                    <div id="description">
                        <section id="AI"> 
                            <h4 className="my-text">
                                هوش مصنوعی
                            </h4>
                        </section>
                        
                    </div>
                    
                </div>

                
            </React.Fragment>
        )
    }
}


export default Home;