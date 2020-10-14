import React from 'react';
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class GetCompanyDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/getAllCompany').then((response)=>{
            this.setState({companies : response.data.companyList})
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
                        <h4>Company Details</h4>
                        <div className="container" id="companyTable">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Name</th>
                                        <th scope="col">Manager Name</th>
                                        <th scope="col">Total No. Of Stocks</th>
                                        <th scope="col">PercentChange</th>
                                        <th scope="col">Stock Price</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.companies.map(company=>
                                            <tr key = {company.id}>
                                                <td>{company.companyName}</td>
                                                <td>{company.managerName}</td>
                                                <td>{company.noOfStocks}</td>
                                                <td>{company.percentageChange}</td>
                                                <td>{company.stockPrice}</td>
                                                <td>
                                                    <Link className="btn text-danger" to="/deleteCompany">
                                                        <i className="fas fa-trash-alt"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div><br/><hr/>
                    </div>
                </form> 
            </div>
        );
    }
}
export default GetCompanyDetails;