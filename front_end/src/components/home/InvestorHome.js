import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function InvestorHome(props) {
    const object = props.history.location.state.investor;
    const investor = {
        investorId: object.investorId,
        investorName: object.investorName,
        gender: object.gender,
        email: object.email,
        mobileNo: object.mobileNo,
        password: object.password,
        bankName: object.bankName,
        branchName: object.branchName,
        accountNo: object.accountNo,
        pancardNo: object.pancardNo,
        balance: object.balance
    }
   
    console.log(investor);
    const history = useHistory();
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
                                        <li><Link className="nav-link" to={`/investorProfile/${investor.investorId}`} id="investor" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, {investor.investorName}</h1><hr/>
                    </div>
                </form> 
            </div>
    )
}
