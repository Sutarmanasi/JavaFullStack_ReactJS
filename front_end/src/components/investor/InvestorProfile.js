import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import UpdateInvestor from './UpdateInvestor'

const axios = require('axios').default;
export default function InvestorProfile({match}) {
    var [update, setUpdate] = useState(false);
    var [investor, setInvestor] = useState({});

    const history = useHistory();
    const investorId = match.params.investorId;
    useEffect(() => {
        axios.get('http://localhost:8080/getInvestor', {
            params: {
                investorId: investorId
            }
        }
        ).then((response) => {
            setInvestor(response.data.investor)
            
        });
    }, [investorId])

    if (update) {
        return <UpdateInvestor investor={investor} />;
        
    }
    return (
        <div>
                <form name="adminHomeForm">
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
                                        <li><Link className="nav-link" to={`/investorProfile/${investorId}`} id="investor" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello {investor.investorName}</h1><hr/>
                        <div className="container">
                            <h2 id="managerprofile">Profile
                                <Link className="btn text-primary" onClick={() => { setUpdate(true) }}>
                                    <i className="fas fa-pencil-alt"></i>
                                </Link>
                            </h2>
                            <div className="col-md-7 container" id="managerProfile">
                            <form autoComplete="off" name="addCompanyForm">
                                <div className="container">
                                    <label for="investorId">Investor Id</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.investorId} id="investorId"
                                            pattern="^[0-9]*$" title="Investor ID should have only numbers" disabled required/>
                                    </div>
                                    <label for="investorName">Investor Name</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" value={investor.investorName} id="investorName"
                                            pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Fullname should only have only alphabets and firstname and lastname"
                                            disabled required />
                                    </div>
                                    <label for="email">Email</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-envelope"></i>
                                            </div>
                                        </div>
                                        <input type="email" className="form-control" value={investor.email} id="email"
                                            title="(Ex:abc@gmail.com)" disabled required/>
                                    </div>
                                    <label for="mobileNo">Mobile No</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-mobile-alt"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.mobileNo} id="mobileNo"
                                            pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" disabled required />
                                    </div>
                                    <label for="bankName">Bank Name</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-university"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.bankName} id="bankName"
                                             title="Bank name should only have only alphabets" disabled required/>
                                    </div>
                                    <label for="branchName">Bank Branch Name</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-university"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.branchName} id="branchName"
                                            pattern="^[a-zA-Z]+$" title="Bank branch name should only have only alphabets" disabled required/>
                                    </div>
                                    <label for="accountNo">Account No</label>
                                    <div className="form-group input-group ">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-address-card"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.accountNo} id="accountNo"
                                            pattern="[0-9]{12}" title="Account number should have only numbers" disabled required/>
                                    </div>
                                    <label for="bankBalance">Bank Balance</label>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-rupee-sign"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" value={investor.balance} id="bankBalance" 
                                            title="Minimum balance should be 10,000 to create your account" disabled required/>
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

