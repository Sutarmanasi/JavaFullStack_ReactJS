import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class GetManagerDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            managers:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8080/getAllManager').then((response)=>{
            this.setState({managers : response.data.managerList})
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
                                        <li><Link className="nav-link btn" to="/addCompany">ADD COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/deleteCompany">DELETE COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/getCompanyDetails">VIEW ALL COMPANY</Link></li>
                                        <li><Link className="nav-link btn" to="/getAllManagers">VIEW ALL MANAGERS</Link></li>
                                        <li><Link className="nav-link btn" to="/getInvestorDetails">VIEW ALL INVESTORS</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Admin</h1><hr/>
                        <h4>Manager Details</h4>
                        <div className="container" id="companyTable">
                        <table className="table table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Manager Name</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile No</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.managers.map(manager=>
                                        <tr key = {manager.id}>
                                            <td>{manager.managerName}</td>
                                            <td>{manager.companyName}</td>
                                            <td>{manager.email}</td>
                                            <td>{manager.mobileNo}</td>
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
export default GetManagerDetails;