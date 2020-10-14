import React from 'react';
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class GetInvestorDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[],
            investors:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/getAllInvestor').then((response)=>{
            this.setState({investors :response.data.investorList})
        });
    }
    render(){
        return(
            <div>
                <form name="adminHomeForm">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                        <Link className="navbar-brand col-sm-3 col-md-2 mr-0" to="/adminHome">Dashboard</Link>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home">Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li ><Link className="nav-link btn" to="/addCompany">ADD COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/deleteCompany">DELETE COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/getCompanyDetails">VIEW ALL COMPANY</Link></li>
                                        <li ><Link className="nav-link btn" to="/getAllManagers">VIEW ALL MANAGERS</Link></li>
                                        <li><Link className="nav-link btn" to="/getInvestorDetails">VIEW ALL INVESTORS</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Admin</h1><hr/>
                        <h4>Investor Details</h4>
                        <div className="container " id="investorTable">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Investor Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile No</th>
                                        <th scope="col">Bank Name</th>
                                        <th scope="col">Bank Branch Name</th>
                                        <th scope="col">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.investors.map(investor=>
                                            <tr key = {investor.id}>
                                                <td>{investor.investorName}</td>
                                                <td>{investor.email}</td>
                                                <td>{investor.mobileNo}</td>
                                                <td>{investor.bankName}</td>
                                                <td>{investor.branchName}</td>
                                                <td>{investor.balance}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}
export default GetInvestorDetails;