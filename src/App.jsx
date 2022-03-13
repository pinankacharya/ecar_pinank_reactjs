import React, { useState } from "react";

import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Userpost from "./components/Users/components/Userpost";
import Adminpage from "./pages/Adminpage";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    let routes;
    if (isLoggedIn) {
        routes = (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/Userpost" element={<Userpost />} />
                <Route path="/Adminpage" element={<Adminpage />} />
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/Userpost" element={<Userpost />} />
                <Route path="/Adminpage" element={<Adminpage />} />
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
