import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function ManagerHome(props) {
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
   
    console.log(manager);
    const history = useHistory();
      history.push("/updateStockPrice",{manager : manager})
   
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
                                        <li><Link className="nav-link" to={`/managerProfile/${manager.managerId}`} id="manager" >PROFILE</Link></li>
                                        <li><Link className="nav-link" to="/updateStockPrice" id="manager" >UPDATE STOCK PRICE</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <h1>Hello {manager.managerName}</h1><hr/>
                    </div>
                </form> 
            </div>
    )
}
