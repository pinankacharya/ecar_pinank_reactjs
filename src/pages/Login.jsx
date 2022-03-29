import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "../pages/Login.css";
import { Row, Col, Form, Input } from "antd";
// import { Default } from "react-toastify/dist/utils";

const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    var navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        //api -- > response --> localstorage..

        var data = {
            email: email,
            password: password,
        };

        await axios.post("http://localhost:4000/login", data).then((res) => {
            if (res.data.status === 200) {
                localStorage.setItem("email", res.data.data.email);
                localStorage.setItem("firstName", res.data.data.firstName);
                // localStorage.setItem("role", res.data.data.role.roleName);
                toast(res.data.msg);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                console.log("here.....");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);

                toast(res.data.msg);
            }
        });
    };

    return (
        <div className="login">
            <Row gutter={16} className="d-flex align-items-center">
                <Col lg={16} style={{ position: "relative" }}>
                    <img
                        className="w-100"
                        data-aos="slide-left"
                        data-aos-duration="1500"
                        src="https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
                    />
                </Col>
                <Col lg={8} className="text-left p-5">
                    <form onSubmit={login}>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            />
                            <small id="emailHelp" className="form-text text-muted">
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                            />
                            {password.length < 4 ? "must have more than 4 characters" : ""}
                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={1800}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                        <br />
                        <Link to="/Register">Click Here to Register</Link>
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default Login;
