import React, { useState } from "react";
// import { API } from "./API"
import { postData } from "../components/Helper";

export const Userpost = () => {
    const [firstname, setfirstname] = useState(""); // usestate - This is a way to “preserve” some values between the function calls
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    // const [roleId, setroleId] = useState("")

    const firstnameHandler = (e) => {
        setfirstname(e.target.value); // e is the event, which in this case is change , target is the element that triggered the event, which in this case is the input , and value is the value of the input element.
    };
    const emailHandler = (e) => {
        setemail(e.target.value); // To access the fields in the event handler use the event.target.name and event.target.value syntax.
    };
    const passwordHandler = (e) => {
        setpassword(e.target.value);
    };

    // const roleIdHandler = (e) => {
    //     setroleId(e.target.value)
    // }

    const submit = (e) => {
        // submit handler

        //it will prevent action of form

        e.preventDefault();

        alert(`firstname: ${firstname} \nemail: ${email} \npassword: ${password} `);

        var body = {
            firstName: firstname,
            email: email,
            password: password,
            // roleId,
        };
        postData(body);
    };
    return (
        <div>
            <h1>users</h1>
            <form onSubmit={submit}>
                <table>
                    <tr>
                        <td> Name</td>
                        <td>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                onChange={(e) => {
                                    firstnameHandler(e);
                                }}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td> Email</td>
                        <td>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                onChange={(e) => {
                                    emailHandler(e);
                                }}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>
                            <input
                                type="text"
                                name="password"
                                placeholder="Enter your password"
                                onChange={(e) => {
                                    passwordHandler(e);
                                }}
                            ></input>
                        </td>
                    </tr>
                    <tr>
                        {/* <td> Message</td>
                        <td>
                            <input
                                type="text"
                                name="role"
                                placeholder="Enter your message"
                                onChange={(e) => {
                                    roleIdHandler(e)
                                }}
                            ></input>
                        </td> */}
                    </tr>
                    <tr>
                        <button type="submit">Submit</button>
                    </tr>
                </table>
            </form>
        </div>
    );
};

export default Userpost;
