import React from "react";
import "./Bikes.css";

const Bikes = (props) => {
  const allTheBikes = props.bikes.map((bike) => {
    return (
      <div className="post-container">
        <div className="bike-post">
          <h3>Brand: {bike.brand}</h3>
          <img src={bike.imgURL} alt="bike_image" className="bike-img" />
          <h5>Category: {bike.category}</h5>
          <h5>Condition: {bike.condition}</h5>
          <h5>Price: ${bike.price}</h5>
          <h5>Seller: {bike.sellerName}</h5>
          <h5>Contact Info: {bike.sellerEmail}</h5>
        </div>
    );
  });
  return <div>{allTheBikes}</div>;
};

export default Bikes;