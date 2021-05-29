import React from 'react';
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createBike } from "../../services/bikes";
import "./CreateBike.css";


const CreateBike = () => {
    const [bike, setBike] = useState({
      brand: "",
      imgURL: "",
      category: "",
      condition: "",
      price: "",
      sellerName: "",
      sellerEmail: "",
    });
  
    const [isCreated, setCreated] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const created = await createBike(bike);
      setCreated({ created });
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBike({
        ...bike,
        [name]: value,
      });
    };
    if (isCreated) {
      return <Redirect to={"/all-bikes"} />;
    }

  return (
    <Layout>
      <div className="form-div">
        <form className="create-form" onSubmit={handleSubmit}>
          <input
            className="input-brand"
            placeholder="Brand"
            value={bike.brand}
            name="brand"
            required
            onChange={handleChange}
          />
          <input
            className="input-imgURL"
            placeholder="Image URL"
            value={bike.imgURL}
            name="img_URL"
            required
            onChange={handleChange}
          />
          <input
            className="input-category"
            placeholder="Category"
            value={bike.content}
            name="category"
            required
            onChange={handleChange}
          />
          <input
            className="input-condition"
            placeholder="Condition"
            value={bike.condition}
            name="condition"
            required
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={bike.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-name"
            placeholder="Name"
            value={bike.sellerName}
            name="seller_name"
            required
            onChange={handleChange}
          />
          <input
            className="input-email"
            placeholder="Email"
            value={bike.sellerEmail}
            name="seller_email"
            required
            onChange={handleChange}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      </Layout>
  );
};

export default CreateBike;