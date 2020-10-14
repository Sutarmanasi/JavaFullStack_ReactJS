import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const axios = require('axios').default;
export default function UpdateInvestor(props) {
    var [updateInvestor, setUpdateInvestor] = useState(props.investor);
    var [message, setMessage] = useState("");

    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdateInvestor({
            ...updateInvestor,
            [name]: value
        })
    }
    const history = useHistory();

    useEffect(() => {
        axios.put('http://localhost:8080/updateInvestor', updateInvestor
        ).then((response) => {
            setMessage(response.data.message);
        });
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (message === "Investor Details Updated Successfully") {

            alert("Updated Successfully");
            history.push("/investorHome",{investor : props.investor})

        } else {
            alert("Not Updated");
        }
    }

    return (
        <div>
                <form name="investorHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Investor</h2>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home"
                                onClick={() => {
                                    history.push('/')

                                }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li><Link className="nav-link" to={`/investorProfile/${props.investor.investorId}`} id="investor" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>  
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>  
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, {props.investor.investorName}</h1><hr/>
                        <h3>Please Update Your Profile...</h3><br/>
                        <div className="container">
                            <div className="col-md-7 container" id="investorProfile">
                                <form autoComplete="off" name="updateInvestorForm" onSubmit={handleSubmit}>
                                    <div className="container">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.investorId} name="investorId" id="investorId"
                                                pattern="^[0-9]*$" title="Investor ID should have only numbers" disabled required/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" value={updateInvestor.investorName} name="investorName" id="investorName"
                                                pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Fullname should only alphabets and firstname and lastname"
                                                onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" value={updateInvestor.email} name="email" id="email"
                                                title="(Ex:abc@gmail.com)" onChange={handleInput}/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.mobileNo} name="mobileNo" id="mobileNo"
                                                pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9"
                                                onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-university"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.bankName} name="bankName" id="bankName"
                                                 title="Bank name should only have only alphabets" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-university"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.branchName} name="branchName" id="branchName"
                                                 title="Bank branch name should only have only alphabets" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group ">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-address-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.accountNo} name="accountNo" id="accountNo"
                                                pattern="[0-9]{12}" title="Account number should have only numbers" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-rupee-sign"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" value={updateInvestor.balance} name="balance" id="balance" 
                                                title="Minimum balance should be 10,000 to create your account" onChange={handleInput} />
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE DETAILS"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
    )
}
