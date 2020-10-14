import React from 'react';
import { Link } from 'react-router-dom';
import InvestorSignIn from '../signin/InvestorSignIn';

const axios=require('axios').default;
class InvestorSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            investorId:'',
            investorName:'',
            email:'',
            mobileNo:'',
            password:'',
            gender:'',
            bankName:'',
            branchName:'',
            accountNo:'',
            pancardNo:'',
            balance:''
        }
    }
    addInvestor=()=>{
        var iId = document.forms["investorSignUpForm"]["investorId"].value;
        var iName = document.forms["investorSignUpForm"]["investorName"].value; 
        var email = document.forms["investorSignUpForm"]["email"].value; 
        var password = document.forms["investorSignUpForm"]["password"].value;
        var gender = document.forms["investorSignUpForm"]["gender"].value; 
        var mobileNo = document.forms["investorSignUpForm"]["mobileNo"].value;
        var bankName = document.forms["investorSignUpForm"]["bankName"].value; 
        var branchName = document.forms["investorSignUpForm"]["branchName"].value;
        var accountNo = document.forms["investorSignUpForm"]["accountNo"].value;
        var pancardNo = document.forms["investorSignUpForm"]["pancardNo"].value;  
        var balance = document.forms["investorSignUpForm"]["balance"].value;
        axios.post("http://localhost:8080/addInvestor",{
            investorId: iId, investorName: iName,
            email: email, mobileNo: mobileNo,
            password: password, gender: gender,
            bankName: bankName, branchName: branchName,
            accountNo: accountNo, pancardNo: pancardNo,
            balance: balance
        }).then((response)=>{
            this.setState({res : response.data.message})
            alert(response.data.message)
        }); 
    }
    render(){
        return(
            <div>
                <form autoComplete="off" name="investorSignUpForm" onSubmit={this.addInvestor}>
                    <h5>Please Fill The Details To Create Your Account</h5>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="ID" name="investorId" id="investorId"
                        title="Investor ID should have only numbers" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="FullName" name="investorName" 
                           pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Fullname should only alphabets and firstname and lastname" id="investorName" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input type="email" className="form-control" placeholder="Email" name="email" 
                            title="(Ex:abc@gmail.com)" id="email" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" className="form-control" placeholder="Password" name="password" 
                             pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                             and length should be 6-16" id="password" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Mobile No" name="mobileNo" id="mobileNo"
                            pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-university"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Bank Name" name="bankName" id="bankName" 
                        pattern="^[a-zA-Z]+$" title="Bank name should only have only alphabets" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-university"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Bank Branch Name" name="branchName" 
                        pattern="^[a-zA-Z]+$" title="Branch name should only have only alphabets" 
                        id="branchName" required/>
                    </div>
                    <div className="form-group input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-address-card"></i>
                            </div>
                        </div>
                        <input placeholder="Account Number" name="accountNo" style={{width:"177px"}}
                          pattern="[0-9]{12}" title="Account number should have only numbers"  id="accountNo" required/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-address-card"></i>
                            </div>
                        </div>
                        <input placeholder="PanCard Number" name="pancardNo"
                        id="pancardNo" style={{width:"177px"}} required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-coins"></i>
                            </div>
                        </div>
                        <input placeholder="Bank Balance" name="balance" style={{width:"177px"}} 
                            title="Minimum balance should be 10,000 to create your account" id="balance" required/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender : &nbsp;&nbsp;
                        <input type="radio" name="gender" value="male" id="gender"/> &nbsp;&nbsp;Male&nbsp;&nbsp;
                        <input type="radio" name="gender" value="female" id="gender"/> &nbsp;&nbsp;Female
                    </div>
                    <input type="submit" className="form-control bg-primary text-light" value="SignUp"/>
                    <br/>
                    Already have an account?
                    <Link className="btn" data-toggle="modal" data-target="#investorSignInModal"
                        onClick={()=>{document.forms["investorSignUpForm"].style.display="none";
                        document.forms["investorSignInForm"].style.display="block";
                        document.getElementById("investorSignInModal").style.display="none";
                        }} style={{color:"blue"}} to="/">SignIn 
                    </Link>
                </form>
                
                <div className="modal fade" id="investorSignInModal" tabIndex="-1" aria-labelledby="investorSignInModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" id="dropblock">
                                <h5 className="modal-title" id="investorSignInModalLabel">Investor SIGNIN</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <InvestorSignIn/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default InvestorSignUp;