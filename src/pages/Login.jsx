import React from "react";
import "./Login.css";
import mainLogo from "../shared/1.png";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2" />
                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key">
                        <i className="fa fa-key" aria-hidden="true" />
                    </div>
                    <div className="bg">
                        <img src={mainLogo} />
                    </div>
                    {/* <div className="col-lg-12 login-title">Login</div> */}

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control" required />
                                </div>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">{/* Error Message */}</div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary">
                                            LOGIN
                                        </button>
                                        <br />
                                        <br />
                                        <Link to="/Register">Signup</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-2" />
                </div>
            </div>
        </div>
    );
}

export default Login;
