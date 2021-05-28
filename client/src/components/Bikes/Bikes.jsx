import React from "react";

const Bikes = (props) => {
  return (
    <div>
      {props.bikes.map((bike) => {
        return (
          <div>
            <h3>{bike.brand}</h3>
            <img src={bike.imgUrl}></img>
            <h5>{bike.brand}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Bikes;
