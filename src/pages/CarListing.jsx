import React from "react";
import { useSelector } from "react-redux";
function CarListing() {
    const { cars } = useSelector((state) => state.carsReducer);
    return (
        <div>
            <h1>cars {cars.length} </h1>
        </div>
    );
}

export default CarListing;
