import React from 'react'
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
    return (
        <div className="container">
            <form name="contactForm" id="contactForm" action="/home">
                <div>
                    <h1 id="contact">Contact Us</h1>
                </div>
                <div id="contactDiv">
                    <div className="form-group input-group" id="inputfield">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input id="name" name="name" placeholder="Your Name"/>
                    </div>
                    <div className="form-group input-group" id="inputfield">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input type="email" id="email" name="username" placeholder="Email ID"/>
                    </div>
                    <div className="form-group input-group" id="inputfield">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                            <i className="fas fa-comment-alt"></i>
                            </div>
                        </div>
                        <textarea cols="22" id="message" name="message" placeholder="Message"/>
                    </div>
                    <div className="form-group" >
                        <Link className="btn bg-primary text-light" id="submitfield">SUBMIT</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Contact;