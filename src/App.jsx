import React, { useState } from "react";

import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Userpost from "./components/Users/components/Userpost";
// import Adminpage from "./pages/Adminpage";
// import Crudmain from "./components/Admin/Crudmain";
// import Admin from "./components/Admin/Admin";
import CarListing from "./pages/CarListing";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Userpost" element={<Userpost />} />
                <Route path="/Carlist" element={<CarListing />} />
                {/* <Route path="/Adminpage" element={<Admin />} /> */}
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/Userpost" element={<Userpost />} />
                {/* <Route path="/Adminpage" element={<Admin />} /> */}
                <Route path="/Carlist" element={<CarListing />} />
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
