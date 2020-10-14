import React from 'react';
import { Link } from 'react-router-dom';

const axios=require('axios').default;
class BuyStock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            stockId:'',
            investorId:'',
            companyId:'',
            quantity:'',
            noOfStocks:''
        }
    }
    buyStock=()=>{
        var stockId=document.forms["buyStockForm"]["stockId"].value;
        var investorId=document.forms["buyStockForm"]["investorId"].value;
        var companyId=document.forms["buyStockForm"]["companyId"].value;
        var quantity=document.forms["buyStockForm"]["quantity"].value;
        var noOfStocks=document.forms["buyStockForm"]["noOfStocks"].value;

        axios.post("http://localhost:8080/buyStock",{
            stockId:stockId,
            investorId:investorId,
            companyId:companyId,
            quantity:quantity,
            noOfStocks:noOfStocks
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
                        <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Investor</h2>
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
                                        <li><Link className="nav-link" to="/investorProfile1" id="investor" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/getAllStocks" id="investor" >VIEW ALL STOCKS</Link></li>
                                        <li><Link className="nav-link" to="/viewCompany" id="investor" >VIEW ALL COMPANIES</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, Investor</h1><hr/>
                        <div className="container">
                            <h2 id="managerprofile">Buy Stocks</h2>
                            <div className="col-md-7 container" id="buyStock">
                                <form autoComplete="off" name="buyStockForm" action="/investorHome1" onSubmit={this.buyStock}>
                                    <div className="container">
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="Investor ID" name="investorId" id="investorId"
                                                pattern="^[0-9]*$" title="Investor ID should have only numbers" required/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="Stock ID" name="stockId" id="stockId"
                                                pattern="^[0-9]*$" title="Stock ID should have only numbers" required/>
                                        </div>
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
                                                    <i className="fas fa-cubes"></i>
                                                </div>
                                            </div>
                                            <input type="number" className="form-control" placeholder="Quantity" name="quantity" id="quantity"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-cubes"></i>
                                                </div>
                                            </div>
                                            <input type="number" className="form-control" placeholder="Total No Of Stocks" name="noOfStocks" id="noOfStocks"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-rupee-sign"></i>
                                                </div>
                                            </div>
                                            <input type="number" className="form-control" placeholder="Stock Price" name="stockPrice" id="stockPrice" 
                                            disabled/>
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="submit" className="form-control btn bg-primary text-light" value="BUY" />
                                            <Link className="form-control btn bg-muted text-dark" to="/investorHome1">CANCEL</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}
export default BuyStock;