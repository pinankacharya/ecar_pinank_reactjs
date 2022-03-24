import React from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../pages/Login.css";
import { userLogin } from "../components/redux/actions/userActions";
// import AOS from "aos";

// import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
// AOS.init();
function Login() {
    const dispatch = useDispatch();
    // const { loading } = useSelector((state) => state.alertsReducer);
    function onFinish(values) {
        dispatch(userLogin(values));
        console.log(values);
    }

    return (
        <div className="login">
            {/* {loading && <Spinner />} */}
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
                    <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
                        <h1>Login</h1>
                        <hr />
                        {/* <Form.Item name="firstName" label="Firstname" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item> */}
                        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>

                        <button className="btn1 mt-2 mb-3">Login</button>
                        <br />

                        <Link to="/Register">Click Here to Register</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
