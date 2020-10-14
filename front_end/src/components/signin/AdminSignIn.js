import React from 'react';

const axios=require('axios').default;
class AdminSignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            res:[]
        }
    }

    adminLogin=()=>{
        var validUsername = document.forms["adminSignInForm"]["username"].value;
        var validPassword = document.forms["adminSignInForm"]["password"].value;   
        axios.get(`http://localhost:8080/adminLogin/${validUsername}/${validPassword}`).then((response)=>{
            this.setState({res : response.data.message})
            alert(response.data.message)
        }); 
    }

    render(){
        return(
            <div>
                <form name="adminSignInForm" action="/adminHome" onSubmit={this.adminLogin}>
                    <h2 className = "text-center">Please Sign In</h2>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input className="form-control" id="username" name="username" placeholder="Username" required/>
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password"
                            pattern="^(?=.*[0-9]).{8,15}$" title="Password must contain alphabets, numbers, one symbol 
                            and length should be 6-16" required/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="form-control bg-primary text-light" value="SignIn"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AdminSignIn;