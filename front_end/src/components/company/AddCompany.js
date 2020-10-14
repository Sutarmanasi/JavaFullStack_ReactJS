import React from 'react';
import { Link } from 'react-router-dom';
import './Company.css';

const axios=require('axios').default;
class AddCompany extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            companyId:'',
            companyName:'',
            managerId:'',
            managerName:'',
            noOfStocks:'',
            stockPrice:'',
            percentageChange:''
        }
    }

    addCompany=()=>{
        var cId = document.forms["addCompanyForm"]["companyId"].value;
        var cName = document.forms["addCompanyForm"]["companyName"].value; 
        var mId = document.forms["addCompanyForm"]["managerId"].value; 
        var mName = document.forms["addCompanyForm"]["managerName"].value;
        var no = document.forms["addCompanyForm"]["noOfStocks"].value; 
        var stockPrice = document.forms["addCompanyForm"]["stockPrice"].value; 
        var percentageChange = document.forms["addCompanyForm"]["percentageChange"].value; 
        axios.post("http://localhost:8080/addCompany",{
                companyId : cId,
                companyName : cName,
                managerId : mId,
                managerName : mName,
                noOfStocks : no,
                stockPrice:stockPrice,
                percentageChange:percentageChange
        }).then((response)=>{
            this.setState({res : response.data.message})
            window.confirm(response.data.message)
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
                            <div className="col-md-2 bg-light d-none d-md-block sidebar">
                                <div className="left-sidebar">
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
                        <h3>Please Add Company Details Here...</h3><br/>
                        <div className="col-md-3 container text-center" id="addCompanyForm">
                            <form autoComplete="off" name="addCompanyForm" action="/adminHome" onSubmit={this.addCompany}>
                                <div className="container">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Company ID" name="companyId" 
                                          id="companyId" pattern="^[0-9]*$" title="Company ID should have only numbers"
                                          required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-building"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Company Name" name="companyName" 
                                          id="companyName"  pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets"
                                          required />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Manager ID" name="managerId" 
                                        id="managerId" pattern="^[0-9]*$" title="Manager ID should have only numbers"
                                         required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Manager Name" name="managerName" 
                                        id="managerName" pattern="^[a-zA-Z]+$" title="Manager name should only have only alphabets"
                                         required />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-cubes"></i>
                                            </div>
                                        </div>
                                        <input type="number" className="form-control" placeholder="Number Of Stocks" name="noOfStocks"
                                        id="noOfStocks" />
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-rupee-sign"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" placeholder="Stock Price" name="stockPrice"
                                        id="stockPrice"/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-percent"></i>
                                            </div>
                                        </div>
                                        <input className="form-control" placeholder="Percentage Change" name="percentageChange"
                                        id="percentageChange"/>
                                    </div>
                                    <div className="form-group input-group">
                                        <input type="submit" className="form-control btn bg-primary text-light" value="ADD COMPANY"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddCompany;