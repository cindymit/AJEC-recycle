import React from "react";
import "./Bikes.css";

const Bikes = (props) => {
  const allTheBikes = props.bikes.map((bike) => {
    return (
        <div className="bike-container">
          <div className="bike-post">
            <img src={bike.imgURL} alt="bike_image" className="bike-img" />
            <p>Brand: {bike.brand}</p>
            <p>Category: {bike.category}</p>
            <p>Condition: {bike.condition}</p>
            <p>Price: ${bike.price}</p>
            <p>Seller: {bike.sellerName}</p>
            <p>Contact Info: {bike.sellerEmail}</p>
          </div>
        </div>
    );
  });
  return <div>{allTheBikes}</div>;
};

export default Bikes;
