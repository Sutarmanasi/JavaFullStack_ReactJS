import React from 'react';
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class ViewAllCompanies extends React.Component{
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
                    <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Investor</h2>
                        <ul className="navbar-nav px-3">
                            <li className="nav-item text-nowrap">
                                <Link className="nav-link text-light" to="/home"
                                >Logout</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 bg-light d-none d-md-block sidebar" id="sidebar">
                                <div className="left-sidebar">
                                    <ul className="nav flex-column sidebar-nav">
                                        <li><Link className="nav-link" to={`/investorProfile/${this.state.companies.investorId}`} id="investor" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Investor</h1><hr/>
                        <h4>Company Details</h4>
                        <div className="container" id="companyTable">
                            <table className="table table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Company Id</th>
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
                                                <td>{company.companyId}</td>
                                                <td>{company.companyName}</td>
                                                <td>{company.managerName}</td>
                                                <td>{company.noOfStocks}</td>
                                                <td>{company.percentageChange}</td>
                                                <td>{company.stockPrice}</td>
                                                <td>
                                                    <abbr id="buy" title="Buy">
                                                        <Link className="btn text-primary" to="/buyStock">
                                                            <i className="fas fa-bold"></i>
                                                        </Link>
                                                    </abbr>
                                                    <abbr id="sell" title="Sell">
                                                        <Link className="btn text-danger" to="/sellStock">
                                                            <i className="fab fa-stripe-s"></i>
                                                        </Link>
                                                    </abbr>
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
export default ViewAllCompanies;