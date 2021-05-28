import React from 'react';
import Layout from "../Layout/Layout";
import { Link } from 'react-router-dom'

const Bikes = (props) => {
  return (
    <Layout>
      <div>
        <Link className="bike" to={`/bikes/${props._id}`}>
          <div className="brand">{props.brand}</div>
          <img className="bike-image" src={props.imgURL} alt={props.name} />
          <div className="category">{props.category}</div>
          <div className="condition">{props.condition}</div>
          <div className="condition">{`$${props.price}`}</div>
        </Link>
      </div>
    </Layout>
  );
};

export default Bikes;