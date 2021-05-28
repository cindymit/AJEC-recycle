import React from "react";
import Layout from "../../components/Layout/Layout";
import Bikes from "../../components/Bikes/Bikes";

const AllBikes = (props) => {
  //bikes, setBikes
  //useEffect that reaches into services folder and calls getBikes

  return (
    <Layout>
      <div>
      {bikes.map((bike) => (
          <Bikes bike={bike} />
        ))}
      </div>
    </Layout>
  );
};

export default AllBikes;
