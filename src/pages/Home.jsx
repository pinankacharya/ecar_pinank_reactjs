import React from "react";
import CarSelectForm from "../components/Home/CarSelectForm";
import CarCarasould from "../components/Home/CarCarasould";

const Home = (props) => {
    return (
        <React.Fragment>
            <CarSelectForm />
            <CarCarasould />
        </React.Fragment>
    );
};

export default Home;
