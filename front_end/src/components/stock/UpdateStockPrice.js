import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const axios = require('axios').default;
export default function UpdateStockPrice(props) {

    const object = props.history.location.state.manager;
    const manager = {
        managerId: object.managerId,
        managerName: object.managerName,
        companyId: object.companyId,
        companyName: object.companyName,
        email: object.email,
        mobileNo: object.mobileNo,
        password: object.password
    }

    const history = useHistory();

    var [updateStockPrice, setUpdateStockPrice] = useState("");
    var [message, setMessage] = useState("");

    const handleInput = (e) => {
        updateStockPrice=document.forms["updateStockPriceForm"]["stockPrice"].value
        setUpdateStockPrice=updateStockPrice;
    }

    useEffect(() => {
        axios.put("http://localhost:8080/updateStockPrice",{
                companyId: manager.companyId,
                stockPrice:updateStockPrice 
        }).then((response)=>{
            setMessage(response.data.message)
        }); 

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message !== "Stock Price Updated Successfully") {
            alert("Updated Successfully");
        } else {
            alert("Not Updated");
        }
    }
    return (
        <div>
            <form name="managerHomeForm" action="/">
                    <nav className="navbar navbar-dark fixed-top flex-md-nowrap p-3" id="dashboard">
                    <h2 className="navbar-brand col-sm-3 col-md-2 mr-0" >Manager</h2>
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
                                        <li><Link className="nav-link" to={`/managerProfile/${manager.managerId}`} id="manager" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello, {manager.managerName}</h1><hr/>
                        <h3>Please Update Stock Price...</h3><br/>
                        <div className="container">
                            <div className="col-md-5 container" id="managerProfile">
                                <form autoComplete="off" name="updateStockPriceForm" onSubmit={handleSubmit}>
                                    <div className="container">
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" placeholder={manager.companyId} name="companyId" id="companyId"
                                        pattern="^[0-9]*$" title="Company ID should have only numbers" required/>
                                    </div>
                                    <div className="form-group input-group">
                                        <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i class="fas fa-rupee-sign"></i>
                                                </div>
                                            </div>
                                        <input type="text" className="form-control" placeholder="Stock Price" name="stockPrice"
                                        id="stockPrice" onChange={handleInput}/>
                                    </div>
                                    <div className="form-group input-group">
                                        <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE STOCK PRICE"/>
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
