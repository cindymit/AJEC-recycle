import React from 'react';
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { createBike } from "../../services/bikes";
import "./CreateBike.css";


const CreateBike = (props) => {
    const [bike, setBike] = useState({
      brand: "",
      imgURL: "",
      category: "",
      description: "",
      condition: "",
      price: "",
      sellerName: "",
      sellerEmail: "",
    });
  
    const [isCreated, setCreated] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBike({
        ...bike,
        [name]: value,
      });
    };
  
      const handleSubmit = async (e) => {
      e.preventDefault();
      const created = await createBike(bike);
      setCreated({ created });
    };
  
    if (isCreated) {
      return <Redirect to={"/all-bikes"} />;
    }

  return (
    <Layout user ={props.user}>
      <div className="form-div">
        <h1>Create your bike post here!</h1>
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
            name="imgURL"
            required
            onChange={handleChange}
          />
          <select
            name="category"
            required
            id="category"
            value={bike.category}
            onChange={handleChange}
          >
            <option disabled={bike.category} selected>
              Category
            </option>
            <option value="Comfort">Comfort</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Youth">Youth</option>
          </select>
         
          <select
            name="condition"
            required
            id="condition"
            value={bike.condition}
            onChange={handleChange}
          >
            <option disabled={bike.condition} selected>
              Condition
            </option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
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
            name="sellerName"
            required
            onChange={handleChange}
          />
          <input
            className="input-email"
            placeholder="Email"
            value={bike.sellerEmail}
            name="sellerEmail"
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