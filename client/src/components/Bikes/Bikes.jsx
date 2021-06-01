import Link from "react";
import "./Bikes.css";

const Bikes = (props) => {
  const allTheBikes = props.bikes.map((bike) => {
    return (
      <div className="bike-container">
        {/* <Link to={`/bikes/${props.id}`} className="bike-link"> */}
        <div className="bike-post">
          <img src={bike.imgURL} alt="bike_image" className="bike-img" />
          <p><strong>Brand:</strong> {bike.brand}</p>
          <p><strong>Category:</strong> {bike.category}</p>
          <p><strong>Condition:</strong> {bike.condition}</p>
          <p><strong>Price:</strong> ${bike.price}</p>
          <p><strong>Seller:</strong> {bike.sellerName}</p>
          <p><strong>Contact Info:</strong> {bike.sellerEmail}</p>
        </div>
        {/* </Link> */}
      </div>
    );
  });
  return <div className="allbikesdiv">{allTheBikes}</div>;
};

export default Bikes;
