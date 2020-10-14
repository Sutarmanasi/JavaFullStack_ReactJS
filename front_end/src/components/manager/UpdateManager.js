import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Manager.css';

const axios = require('axios').default;
export default function UpdateManager(props) {
    
    var [updateManager, setUpdateManager] = useState(props.manager);
    var [message, setMessage] = useState("");

    const handleInput = (e) => {

        var { name, value } = e.target;
        setUpdateManager({
            ...updateManager,
            [name]: value
        })
    }
    const history = useHistory();

    useEffect(() => {
        axios.put('http://localhost:8080/updateManager', updateManager
        ).then((response) => {
            setMessage(response.data.message);
        });
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message === "Manager Details Updated") {
            alert("Updated Successfully");
            history.push("/managerHome",{manager : props.manager})
        } else {
            alert("Not Updated");
        }
    }
    return (
        <div>
            <form name="managerHomeForm">
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
                                         <li><Link className="nav-link" to={`/managerProfile/${props.manager.managerId}`} id="manager" >PROFILE</Link></li>
                                         <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <h1>Hello, {props.manager.managerName}</h1><hr/>
                         <h3>Please Update Your Profile...</h3><br/>
                         <div className="container">
                             <div className="col-md-7 container" id="managerProfile" >
                                 <form autoComplete="off" name="managerProfileForm" onSubmit={handleSubmit}>
                                     <div className="container">
                                         <label for="managerId">Manager Id</label>
                                         <div className="form-group input-group">
                                             <div className="input-group-prepend">
                                                 <div className="input-group-text">
                                                     <i className="fas fa-id-card"></i>
                                                </div>
                                             </div>
                                             <input type="text" className="form-control"  id="managerId"
                                                pattern="^[0-9]*$" title="Manager ID should have only numbers"
                                                value={updateManager.managerId} disabled required/>
                                        </div>
                                        <label for="managerName">Manager Name</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" placeholder="FullName" name="managerName" id="managerName"
                                                pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Manager name should only have only alphabets and firstname and lastname"
                                                value={updateManager.managerName} required
                                                onChange={handleInput}  />
                                        </div>
                                        <label for="companyId">Company Id</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-id-card"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="companyId"
                                                pattern="^[0-9]*$" title="Company ID should have only numbers"
                                                value={updateManager.companyId} disabled required/>
                                        </div>
                                        <label for="companyId">Company Name</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-building"></i>
                                                </div>
                                            </div>
                                            <input type="text" className="form-control" id="companyName"
                                                pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets"
                                                value={updateManager.companyName} disabled required />
                                        </div>
                                        <label for="email">Email</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email" name="email" id="email"
                                                title="(Ex:abc@gmail.com)"
                                                value={updateManager.email}  required
                                                onChange={handleInput}/>
                                        </div>
                                        <label for="mobileNo">Mobile No</label>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">
                                                    <i className="fas fa-mobile-alt"></i>
                                                </div>
                                            </div>
                                            <input className="form-control" placeholder="MobileNo" name="mobileNo" id="mobileNo"
                                                pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9"
                                                value={updateManager.mobileNo} required
                                                onChange={handleInput}  />
                                        </div>
                                        <div className="form-group input-group">
                                            <input type="submit" className="form-control btn bg-primary text-light" value="UPDATE DETAILS"/>
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
