import React from "react";
import { useState, useEffect } from "react";
import "./BikeDetails.css";
import Layout from "../../components/Layout/Layout";
import { getBike, deleteBike } from "../../services/bikes";
import { useParams, Link } from "react-router-dom";

const BikeDetails = (props) => {
  const [bike, setBike] = useState({});
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBike = async () => {
      const bike = await getBike(id);
      setBike(bike);
      setLoaded(true);
    };
    fetchBike();
  }, [id]);

  console.log(bike);

  const authenticatedOptions = (
    <div className="user-details">
      <div className="sellerName-container">
        <label className="detail-label">Seller Name</label>
        <div className="sellerName">{bike.sellerName}</div>
      </div>
      <div className="sellerEmail-container">
        <label className="detail-label">Seller Email</label>
        <div className="sellerEmail">{bike.sellerEmail}</div>
      </div>
      <div className="edit-delete">
        <Link className="edit-button" to={`/bikes/${bike._id}/edit`}>
          Edit
        </Link>
        <Link to="/all-bikes">
          <button
            className="delete-button"
            onClick={() => deleteBike(bike._id)}
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  );

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="bikedetails-container">
        <div className="bike-detail">
          <img
            className="bike-detail-image"
            src={bike.imgURL}
            alt={bike.brand}
          />
        </div>
        <div className="detail">
          <div className="brand">{bike.brand}</div>
          <div className="price">{`$${bike.price}`}</div>
          <div className="category-container">
            <div className="label-container">
              <label className="detail-label">Category</label>
            </div>
            <div className="category">{bike.category}</div>
          </div>
          <div className="condition-container">
            <div className="label-container">
              <label className="detail-label">Condition</label>
            </div>
            <div className="condition">{bike.condition}</div>
          </div>
          <div className="description-container">
            <label className="description-label">Description</label>
            <div className="description">{bike.description}</div>
          </div>
          <div className="button-container"></div>
          {!props.user ? null : authenticatedOptions}
        </div>
      </div>
    </Layout>
  );
};

export default BikeDetails;
