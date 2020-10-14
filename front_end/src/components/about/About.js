import React from 'react'
import about from '../images/grow2.jpg';
import './About.css';

function About() {
    return (
        <div>
            <table>
                <tr className="col-md-12 offset-md-0">
                    <td>
                        <img src={about} width="600" height="400" alt="home" id="about"/> 
                    </td>
                    <td>
                        <h5 className="col-md-12 offset-md-0" id="aboutInfo">Stock Management System is software which is helpful for the businesses 
                            operate company, where company keeps the records of stocks. Stock Management System will have the 
                            ability to track overall worth and available stock.
                            <br/><br/>
                            We aim to design and develop an standalone stock management system that will:
                            <ul>
                                <li> Used by investors to buy or sell the stocks of company</li>
                                <li>Facilitate increase in productivity, decrease paperwork, human  faults, 
                                    manual delay and speed up the process
                                </li>
                                <li> To maintain security</li>
                                <li> To provide accurate data when it is required</li>
                            </ul>
                        </h5>
                    </td>
                </tr>
            </table>

            <div className="card-deck" id="block">
                <div className="card" id="cardblock">
                    <div className="card-body">
                        <h5 className="card-title" id="txtcolor"><i className="fas fa-user" id="usericon"></i><br/><br/>
                        Investors</h5>
                    </div>
                </div>
                <div className="card" id="cardblock">
                    <div className="card-body">
                        <h5 className="card-title" id="txtcolor" ><i className="fas fa-users" id="usericon"></i><br/><br/>
                        Team Members</h5>
                    </div>
                </div>
                <div className="card" id="cardblock">
                    <div className="card-body">
                        <h5 className="card-title" id="txtcolor">
                            <i className="far fa-star" id="star1"></i>
                            <i className="far fa-star" id="star2"></i>
                            <i className="far fa-star" id="star3"></i>
                            <br/><br/>Ratings
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;