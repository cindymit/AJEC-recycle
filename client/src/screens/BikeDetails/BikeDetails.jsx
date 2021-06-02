import React from "react";
import { useState, useEffect } from "react";
import "./BikeDetails.css";
import Layout from "../../components/Layout/Layout";
import { getBike, deleteBike } from "../../services/bikes";
import { useParams, Link } from "react-router-dom";

const BikeDetails = (props) => {
  const [bike, setBike] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBike = async () => {
      const bike = await getBike(id)
      setBike(bike)
      setLoaded(true)
    }
    fetchBike()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="bikedetails-container">
        <div className='bike-detail'>
        <img
          className='bike-detail-image'
          src={bike.imgURL}
          alt={bike.brand}
          />
          </div>
        <div className='detail'>
          <div className='brand'>{bike.brand}</div>
          <div className='price'>{`$${bike.price}`}</div>
          <div className='category'><strong>Category:</strong> {bike.category}</div>
          <div className='condition'><strong>Condition:</strong> {bike.condition}</div>
          <div className='sellerName'><strong>Seller Name:</strong> {bike.sellerName}</div>
          <div className='sellerEmail'><strong>Seller Email:</strong> {bike.sellerEmail}</div>
          <div className='button-container'>
          </div>
            <Link className='edit-button' to={`/bikes/${bike._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteBike(bike._id)}
            >
              Delete
            </button>
          </div>
      </div>
    </Layout>
  );
};

export default BikeDetails;
