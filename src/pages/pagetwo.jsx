// import React, { useState } from "react";
// import { Row, Col, Form, Input } from "antd";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import "../pages/Login.css";
// // import { userLogin } from "../components/redux/actions/userActions;
// // // import AOS from "aos";

// // // import "aos/dist/aos.css"; // You can also use <link> for styles
// // // ..
// // // AOS.init();
// function Login() {
//     //     // const dispatch = useDispatch();
//     //     // const { loading } = useSelector((state) => state.alertsReducer);
//     //     // function onFinish(values) {
//     //     // dispatch(values);
//     //     // console.log(values);
//     // }/</link>
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     async function loginUser(event) {
//         event.preventDefault();

//         const response = await fetch("http://localhost:4000/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email,
//                 password,
//             }),
//         });

//         const data = await response.json();

//         if (data.user) {
//             localStorage.setItem("token", data.user);
//             alert("login succesful");
//             window.location.href = "/";
//         } else {
//             alert("please check your email and password");
//         }
//     }

//     return (
//         <div className="login">
//             {/* {loading && <Spinner />} */}
//             <Row gutter={16} className="d-flex align-items-center">
//                 <Col lg={16} style={{ position: "relative" }}>
//                     <img
//                         className="w-100"
//                         data-aos="slide-left"
//                         data-aos-duration="1500"
//                         src="https://images.unsplash.com/photo-1532268116505-8c59cc37d2e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80"
//                     />
//                 </Col>
//                 <Col lg={8} className="text-left p-5">
//                     <Form layout="vertical" className="login-form p-5" onSubmit={loginUser}>
//                         <h1>Login</h1>
//                         <hr />
//                         {/* <Form.Item name="firstName" label="Firstname" rules={[{ required: true }]}>
//                             <Input />
//                         </Form.Item> */}
//                         <Form.Item name="email" label="Email" rules={[{ required: true }]}>
//                             <Input
//                                 value={email}
//                                 onchnage={(e) => {
//                                     setEmail(e.target.value);
//                                     // type = "email";
//                                 }}
//                             />
//                         </Form.Item>
//                         <Form.Item name="password" label="Password" rules={[{ required: true }]}>
//                             <Input
//                                 value={password}
//                                 onchnage={(e) => {
//                                     setPassword(e.target.value);
//                                 }}
//                             />
//                         </Form.Item>

//                         <button className="btn1 mt-2 mb-3" type="submit" value="Login">
//                             Login
//                         </button>
//                         <br />

//                         <Link to="/Register">Click Here to Register</Link>
//                     </Form>
//                 </Col>
//             </Row>
//         </div>
//     );
// }

// export default Login;
