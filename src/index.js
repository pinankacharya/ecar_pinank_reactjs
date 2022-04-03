import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./components/redux/Store";
import { Provider } from "react-redux";
// import "react-bootstrap.min.js";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
