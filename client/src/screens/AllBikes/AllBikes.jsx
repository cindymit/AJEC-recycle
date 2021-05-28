import { getBikes } from "../../services/bikes";
import { useEffect, useState } from "react";
import Bikes from "../../components/Bikes/Bikes";
import Layout from "../../components/Layout/Layout";

const AllBikes = () => {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    const fetchBikes = async () => {
      const allBikes = await getBikes();
      setBikes(allBikes);
      console.log(allBikes);
    };
    fetchBikes();
  }, []);

  return (
    <div>
      <Layout>
        <Bikes bikes={bikes} />
      </Layout>
    </div>
  );
};

export default AllBikes;
