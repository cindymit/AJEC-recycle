import { Link } from "react-router-dom";
import "./Bikes.css";

const Bikes = (props) => {
  const allTheBikes = props.bikes.map((bike) => {
    return (
      <div className="bike-container">
        <Link to={`/bikes/${bike._id}`} className="bike-link">
        <div className="bike-post">
          <img src={bike.imgURL} alt="bike_image" className="bike-img" />
          <p><strong>Brand:</strong> {bike.brand}</p>
          <p><strong>Category:</strong> {bike.category}</p>
          <p><strong>Condition:</strong> {bike.condition}</p>
          <p>${bike.price}</p>
        </div>
        </Link>
      </div>
    );
  });
  return <div className="allbikesdiv">{allTheBikes}</div>;
};

export default Bikes;
