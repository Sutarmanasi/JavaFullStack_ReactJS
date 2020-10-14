import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InvestorForgotPassword from '../investor/InvestorForgotPassword';

const axios = require('axios').default;
export default function InvestorSignIn(props) {
  var [investorId, setInvestorId] = useState("");
  var [password, setPassword] = useState("");

  var [investor, setInvestor] = useState({});



  const history = useHistory();

  useEffect(() => {
    axios.get('http://localhost:8080/investorLogin', {
      params: {
        investorId: investorId,
        password: password
      }
    }
    ).then((response) => {
      setInvestor(response.data.investor)
      console.log(response.data.investor)
    });

  }, [investorId, password])

  const handleSubmit = e => {
    e.preventDefault();

    console.log(investor);

    if (investor != null) {
      alert("Logged in");

      history.push("/investorHome",{investor : investor})
    
      setTimeout("location.reload(true)");
    } else {
      alert("Please enter valid credentials")
    }
  }
  return (
    <div id="investorSignInDiv">
                <form autoComplete="off" name="investorSignInForm" onSubmit={handleSubmit}>
                    <h2 className = "text-center">Please Sign In</h2>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input type="text" className="form-control" name="userID" placeholder="UserID" id="investorId"
                            pattern="^[0-9]*$" title="UserID should have only numbers"
                            onChange={
                                e => { setInvestorId(e.target.value) }
                              }  required />
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
                              }  required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control bg-primary text-light" value="SignIn"/>
                    </div>
                    <p className="text-center">
                        <Link className="btn" data-toggle="modal" data-target="#investorForgotPasswordModal"
                            onClick={()=>{document.forms["investorSignInForm"].style.display="none";
                            document.forms["investorForgotPasswordForm"].style.display="block";
                            document.getElementById("investorSignInModal").style.display="none";
                            }} style={{color:"blue"}} to="/">Forgot Password
                        </Link>
                    </p>
                </form>
                <div className="modal fade" id="investorForgotPasswordModal" tabIndex="-1" aria-labelledby="investorForgotPasswordModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" id="dropblock">
                                <h5 className="modal-title" id="investorForgotPasswordModalLabel">Please Change Your Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <InvestorForgotPassword/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}
