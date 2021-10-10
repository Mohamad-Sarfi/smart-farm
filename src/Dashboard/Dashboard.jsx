import React from "react";
import "./DashboardStyle.css";
import News from "./News/News";
import Recoms from "./Recoms/Recoms";

class Dashboard extends React.Component {


    render() { 
        return (
            <React.Fragment>
                <div className="main-dashboard">
                    <Recoms />
                    <News />
                </div>
            </React.Fragment>
        );
    }
}
 
export default Dashboard;