import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ManagerForgotPassword from '../manager/ManagerForgotPassword';

const axios = require('axios').default;
export default function ManagerSignIn(props) {
  var [managerId, setManagerId] = useState("");
  var [password, setPassword] = useState("");

  var [manager, setManager] = useState({});
  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8080/managerLogin', {
      params: {
        managerId: managerId,
        password: password
      }
    }
    ).then((response) => {
      setManager(response.data.manager)
      console.log(response.data.manager)
    });

  }, [managerId, password])

  const handleSubmit = e => {
    e.preventDefault();

    console.log(manager);

    if (manager != null) {
      alert("Logged in");

      history.push("/managerHome",{manager : manager})
    
      setTimeout("location.reload(true)");
    } else {
      alert("Please enter valid credentials")
    }
  }
  return (
    <div>
      <form name="managerSignInForm" onSubmit={handleSubmit}>
                    <h2 className = "text-center">Please Sign In</h2>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" name="managerId" placeholder="UserID"
                          id="managerId"  pattern="^[0-9]*$" title="UserID should have only numbers"
                          onChange={
                            e => { setManagerId(e.target.value) }
                          } required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password"
                           id="password" pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                            and length should be 6-16" 
                            onChange={
                              e => { setPassword(e.target.value) }
                            } required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control bg-primary text-light" value="SignIn"/>
                    </div>
                    <p className="text-center">
                        <Link className="btn" data-toggle="modal" data-target="#managerForgotPasswordModal"
                            onClick={()=>{document.forms["managerSignInForm"].style.display="none";
                            document.forms["managerForgotPasswordForm"].style.display="block";
                            document.getElementById("managerSignInModal").style.display="none";
                            }} style={{color:"blue"}} to="/">Forgot Password?
                        </Link>
                    </p>
                </form>
                <div className="modal fade" id="managerForgotPasswordModal" tabIndex="-1" aria-labelledby="managerForgotPasswordModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" id="dropblock">
                                <h5 className="modal-title" id="managerForgotPasswordModalLabel">Please Change Your Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ManagerForgotPassword/>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}
