import React from "react";

const Bikes = (props) => {
  const allTheBikes = props.bikes.map((bike) => {
    return (
      <div>
        <h3>{bike.brand}</h3>
        <img src={bike.imgURL} alt='bikes'/>
        <h5>{bike.brand}</h5>
      </div>
    );
  });
  return <div>{allTheBikes}</div>;
};

export default Bikes;
