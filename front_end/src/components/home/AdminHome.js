import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';

const axios=require('axios').default;
class AdminHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            companies:[],
            investors:[],
            company:{},
            companyId:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/getAllCompany').then((response)=>{
            this.setState({companies : response.data.companyList})
        });
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
                                <div className="left-sidebar" id="sideblock">
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
                    </div>
                </form> 
            </div>
        );
    }
}
export default AdminHome;