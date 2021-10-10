import React from "react";
import "./News.css";
import orchard1 from "../../images/orchard1.jpg";
import orchard2 from "../../images/orchard2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class News extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className="main-news">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={orchard1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={orchard2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={orchard2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                    
                </div>
            </React.Fragment>
        )
    }
}
 
export default News;