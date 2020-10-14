import React from 'react';
import {BrowserRouter as Router , Link, Route} from 'react-router-dom';
import './App.css';
import MainHome from './components/home/MainHome';
import AdminSignIn from './components/signin/AdminSignIn';
import InvestorSignIn from './components/signin/InvestorSignIn';
import ManagerSignIn from './components/signin/ManagerSignIn';
import InvestorSignUp from './components/signup/InvestorSignUp';
import ManagerSignUp from './components/signup/ManagerSignUp';
import AdminHome from './components/home/AdminHome';
import AddCompany from './components/company/AddCompany';
import DeleteCompany from './components/company/DeleteCompany';
import GetCompanyDetails from './components/company/GetCompanyDetails';
import GetInvestorDetails from './components/investor/GetInvestorDetails';
import ManagerHome from './components/home/ManagerHome';
import ManagerProfile from './components/manager/ManagerProfile';
import UpdateStockPrice from './components/stock/UpdateStockPrice';
import InvestorHome from './components/home/InvestorHome';
import InvestorProfile from './components/investor/InvestorProfile';
import UpdateInvestor from './components/investor/UpdateInvestor';
import GetInvestorStock from './components/stock/GetInvestorStock';
import BuyStock from './components/stock/BuyStock';
import SellStock from './components/stock/SellStock';
import InvestorForgotPassword from './components/investor/InvestorForgotPassword';
import ManagerForgotPassword from './components/manager/ManagerForgotPassword';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import logo from './components/images/stocklogo.png';
import GetManagerDetails from './components/manager/GetManagerDetails';
import UpdateManager from './components/manager/UpdateManager';
import ViewAllCompanies from './components/investor/ViewAllCompanies';
import InvestorHome1 from './components/investor/InvestorHome1';

function App() {
  return (
    <Router>
      <div className="row">
        <div className="col-md-12 offset-md-0">
          <form name="main-nav-bar">
            <nav className="navbar navbar-expand-lg navbar-light" name="main-nav-bar" id="main-nav-bar">
              <Link className="navbar-brand text-light" to="/home">
                <img src={logo} alt="stocklogo" id="logo"/>
              </Link>
              <Link className="navbar-brand text-light" to="/home"><strong>Stock Management System</strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link className="nav-link text-light" to="/home">HOME</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link text-light" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link text-light" to="/contact">CONTACT US</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown" id="signInDrop">
                        <Link className="nav-link dropdown-toggle btn text-light" to="/" id="signInDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          SignIn
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="signInDropDown" id="dropblock">
                          <button type="button" className="btn" data-toggle="modal" data-target="#adminSignIn" id="signInChoice">
                              ADMIN 
                          </button>
                          <button type="button" className="btn" data-toggle="modal" data-target="#managerSignIn" id="signInChoice">
                            MANAGER 
                          </button>
                          <button type="button" className="btn" data-toggle="modal" data-target="#investorSignIn" id="signInChoice">
                            INVESTOR 
                          </button>
                        </div>
                      </li>
                      <li className="nav-item dropdown" id="signInDrop">
                        <Link className="nav-link dropdown-toggle btn text-light" to="/" id="signUpDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          SignUp
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="signUpDropDown" id="dropblock">
                          <button type="button" className="btn" data-toggle="modal" data-target="#managerSignUp" id="signInChoice">
                            MANAGER
                          </button>
                          <button type="button" className="btn" data-toggle="modal" data-target="#investorSignUp" id="signInChoice">
                            INVESTOR 
                          </button>
                        </div>
                      </li>
                    </ul>
                  </form>
                  <div className="modal fade" id="adminSignIn" tabIndex="-1" aria-labelledby="adminSignInLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="dropblock">
                          <h5 className="modal-title" id="adminSignInLabel">ADMIN SIGNIN</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                            <AdminSignIn/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="managerSignIn" tabIndex="-1" aria-labelledby="managerSignInLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="dropblock">
                          <h5 className="modal-title" id="managerSignInLabel">MANAGER SIGNIN</h5>
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
                  <div className="modal fade" id="investorSignIn" tabIndex="-1" aria-labelledby="investorSignInLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="dropblock">
                          <h5 className="modal-title" id="investorSignInLabel">INVESTOR SIGNIN</h5>
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
                  <div className="modal fade" id="managerSignUp" tabIndex="-1" aria-labelledby="managerSignUpLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header" id="dropblock">
                          <h5 className="modal-title" id="managerSignUpLabel">MANAGER SIGNUP</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <ManagerSignUp/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal fade" id="investorSignUp" tabIndex="-1" aria-labelledby="investorSignUpLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content" >
                        <div className="modal-header" id="dropblock">
                          <h5 className="modal-title" id="investorSignUpLabel">INVESTOR SIGNUP</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <InvestorSignUp/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
          </form>
          <switch>
            <Route path="/home" component={MainHome}></Route>
            <Route path="/adminSignIn" component={AdminSignIn}></Route>
            <Route path="/investorSignIn" component={InvestorSignIn}></Route>
            <Route path="/managerSignIn" component={ManagerSignIn}></Route>
            <Route path="/investorSignUp" component={InvestorSignUp}></Route>
            <Route path="/managerSignUp" component={ManagerSignUp}></Route>
            <Route path="/adminHome" component={AdminHome}></Route>
            <Route path="/addCompany" component={AddCompany}></Route>
            <Route path="/deleteCompany" component={DeleteCompany}></Route>
            <Route path="/getCompanyDetails" component={GetCompanyDetails}></Route>
            <Route path="/getInvestorDetails" component={GetInvestorDetails}></Route>
            <Route path="/managerHome" component={ManagerHome}></Route>
            <Route exact path="/managerProfile/:managerId" component={ManagerProfile}></Route>
            <Route exact path="/updateManager/:managerId" component={UpdateManager}></Route>
            <Route path="/updateStockPrice" component={UpdateStockPrice}></Route>
            <Route path="/investorHome" component={InvestorHome}></Route>
            <Route path="/investorProfile/:investorId" component={InvestorProfile}></Route>
            <Route path="/updateInvestor/:investorId" component={UpdateInvestor}></Route>
            <Route path="/buyStock" component={BuyStock}></Route>
            <Route path="/sellStock" component={SellStock}></Route>
            <Route path="/investorForgotPassword" component={InvestorForgotPassword}></Route>
            <Route path="/managerForgotPassword" component={ManagerForgotPassword}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/getAllManagers" component={GetManagerDetails}></Route>
            <Route path="/viewCompany" component={ViewAllCompanies}></Route>
            <Route path="/investorHome1" component={InvestorHome1}></Route>
            <Route path="/getAllStocks" component={GetInvestorStock}></Route>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
