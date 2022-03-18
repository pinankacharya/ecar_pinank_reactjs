import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCars } from "../components/redux/actions/carsActions";

function CarListing() {
    const { cars, loading } = useSelector((state) => state.carsReducer);
    const dispatch = useDispatch();
    console.log(
        useSelector((state) => state.carsReducer),
        "..."
    );

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return <div>{cars.car && <h1>cars {cars.car.length} </h1>}</div>;
}

export default CarListing;

// state.carsReducer
