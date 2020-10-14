import React from 'react';
import './MainHome.css';
import stock1 from '../images/stock1.png';
import stock2 from '../images/stock2.png';
import stock3 from '../images/stock3.png';

class MainHome extends React.Component{
    render(){
        return(
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={stock1} className="d-block w-100 " alt="stock1" id="stock" />
                    </div>
                    <div className="carousel-item">
                        <img src={stock2} className="d-block w-100 " alt="stock2" id="stock"/>
                    </div>
                    <div className="carousel-item">
                        <img src={stock3} className="d-block w-100 " alt="stock3" id="stock" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}
export default MainHome;