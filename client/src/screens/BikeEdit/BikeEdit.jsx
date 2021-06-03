import { useState, useEffect } from "react";
import "./BikeEdit.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/Layout/Layout.jsx";
import { getBike, editBike } from "../../services/bikes.js";

const BikeEdit = (props) => {
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

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchBike = async () => {
      const bike = await getBike(id);
      setBike(bike);
    };
    fetchBike();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBike({
      ...bike,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await editBike(id, bike);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/bikes/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="bike-edit">
        <div className="image-container">
          <img className="edit-bike-image" src={bike.imgURL} alt={bike.name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={bike.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="edit-brand"
            placeholder="Brand Name"
            value={bike.brand}
            name="brand"
            required
            onChange={handleChange}
          />
          <input
            className="edit-price"
            placeholder="Price"
            value={bike.price}
            name="price"
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
              Pick One
            </option>
            <option value="Comfort">Comfort</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Youth">Youth</option>
          </select>
          <input
            className="edit-description"
            placeholder="Image URL"
            value={bike.description}
            name="description"
            required
            onChange={handleChange}
          />
          <select
            name="condition"
            required
            id="condition"
            value={bike.condition}
            onChange={handleChange}
          >
            <option disabled={bike.condition} selected>
              Pick One
            </option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>
          
          <input
            className="edit-sellerName"
            placeholder="Seller Name"
            value={bike.sellerName}
            name="sellerName"
            required
            onChange={handleChange}
          />
          <input
            className="edit-sellerEmail"
            placeholder="Seller Email"
            value={bike.sellerEmail}
            name="sellerEmail"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default BikeEdit;
