import React, { useState } from "react";
// import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Adminpage from "./pages/Adminpage";
import Userpost from "./components/Users/components/Userpost";
// import Adminpage from "./pages/Adminpage";
// import Crudmain from "./components/Admin/Crudmain";
// import Admin from "./components/Admin/Admin";
import CarListing from "./pages/CarListing";
import Addcar from "./pages/Addcar";
// import { Reddit } from "@mui/icons-material";

// admin

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/Userpost" element={<Userpost />} />
                <Route path="/Carlist" element={<CarListing />} />
                <Route path="/Admin" element={<Adminpage />} />
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                {/* <Route path="/Admin" element={<Adminpage />} /> */}
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/Userpost" element={<Userpost />} /> */}
                {/* <Route path="/Adminpage" element={<Admin />} /> */}
                {/* <Route path="/Carlist" element={<CarListing />} /> */}
                <Route path="Addcar" element={<Addcar />} />
            </Routes>
        );
    }

    return (
        <Router>
            <main>{routes}</main>
        </Router>
    );
};

export default App;
