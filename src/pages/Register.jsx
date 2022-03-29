import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import "../pages/Register.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Register() {
    // const dispatch = useDispatch();
    // // const { loading } = useSelector((state) => state.alertsReducer);
    // function onFinish(values) {
    //     dispatch(values);
    //     console.log(values);
    const [firstName, setfirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [toastMsg, setToastMsg] = useState("");

    // useEffect(() => {

    // const notify = () => {
    //     console.log(toastMsg);
    //     toast(`${toastMsg}`);
    // };
    // }, [toastMsg]);

    // const dispatch = useDispatch();
    async function saveUser(e) {
        e.preventDefault();
        console.warn(firstName, email, password);

        try {
            const { data, status } = await axios.post("http://localhost:4000/users", { firstName, email, password });
            console.log(data.msg, status);
            if (status === 201) toast.success(data.msg);
            else toast.error(data.msg);
            // console.log(toastMsg);
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        }
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
                        src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1098&q=80"
                    />
                </Col>
                <Col lg={8} className="text-left p-5">
                    <Form layout="vertical" className="login-form p-5">
                        <h1>Register</h1>
                        <hr />
                        <Form.Item name="firstName" label="First name" rules={[{ required: true }]}>
                            <Input value={firstName} onChange={(e) => setfirstName(e.target.value)} required />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
                            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>
                        <Form.Item name="password" label="Password" rules={[{ required: true }]}>
                            <Input value={password} onChange={(e) => setPassword(e.target.value)} />
                            <br />
                            {password.length < 4 ? "must have more than 4 characters" : ""}
                        </Form.Item>
                        <br />

                        <button className="btn1 mt-2 mb-3" onClick={saveUser}>
                            Register
                        </button>
                        <ToastContainer />
                        <br />

                        <Link to="/login">Click Here to Login</Link>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Register;
