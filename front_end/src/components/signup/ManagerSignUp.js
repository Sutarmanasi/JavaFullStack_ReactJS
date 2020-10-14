import React from 'react';
import { Link } from 'react-router-dom';
import ManagerSignIn from '../signin/ManagerSignIn';

const axios=require('axios').default;
class ManagerSignUp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[],
            companyId:'',
            companyName:'',
            managerId:'',
            managerName:'',
            email:'',
            mobileNo:'',
            password:''
        }
    }
    addManager=()=>{
        var cId = document.forms["managerSignUpForm"]["companyId"].value;
        var cName = document.forms["managerSignUpForm"]["companyName"].value; 
        var mId = document.forms["managerSignUpForm"]["managerId"].value; 
        var mName = document.forms["managerSignUpForm"]["managerName"].value;
        var email = document.forms["managerSignUpForm"]["email"].value; 
        var mobileNo = document.forms["managerSignUpForm"]["mobileNo"].value;
        var password = document.forms["managerSignUpForm"]["password"].value;  
        axios.post("http://localhost:8080/addManager",{
                companyId : cId,
                companyName : cName,
                managerId : mId,
                managerName : mName,
                email:email,
                password:password,
                mobileNo:mobileNo
        }).then((response)=>{
            this.setState({res : response.data.message})
            alert(response.data.message)
        }); 
    }
    render(){
        return(
            <div>
                <form autoComplete="off" name="managerSignUpForm" onSubmit={this.addManager}>
                    <h5>Please Fill The Details To Create Your Account</h5>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Manager ID" name="managerId" 
                            pattern="^[0-9]*$" title="Manager ID should have only numbers"
                            id="managerId" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Manager Name" name="managerName" 
                            pattern="[A-z][a-z]*+\\s[A-z][a-z]*+" title="Manager Name should only alphabets and firstname and lastname"
                            id="managerName" required />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-id-card"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Company ID" name="companyId" 
                            pattern="^[0-9]*$" title="Company ID should have only numbers"
                            id="companyId" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-building"></i>
                            </div>
                        </div>
                        <input className="form-control" placeholder="Company Name" name="companyName" 
                            pattern="^[a-zA-Z]+$" title="Company name should only have only alphabets"
                            id="companyName" required />
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
                        <input className="form-control" placeholder="Mobile No" name="mobileNo" 
                            pattern="[7-9][0-9]{9}" title="Mobile number must 10 digits and start with 7 or 8 or 9"
                            id="mobileNo" required/>
                    </div>
                    <input type="submit" className="form-control bg-primary text-light" value="SignUp"/>
                    <br/>
                    Already have an account?
                    <Link className="btn" data-toggle="modal" data-target="#managerSignInModal"
                        onClick={()=>{document.forms["managerSignUpForm"].style.display="none";
                        document.forms["managerSignInForm"].style.display="block";
                        document.getElementById("managerSignInModal").style.display="none";
                        }} style={{color:"blue"}} to="/">Please SignIn 
                    </Link>
                </form>
                <div className="modal fade" id="managerSignInModal" tabIndex="-1" aria-labelledby="managerSignInModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" id="dropblock">
                                <h5 className="modal-title" id="managerSignInModalLabel">MANAGER SIGNIN</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ManagerSignIn/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ManagerSignUp;