import { getBikes } from "../../services/bikes";
import { useEffect, useState } from "react";
import Bikes from "../../components/Bikes/Bikes";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";

const AllBikes = () => {
  const [input, setInput] = useState("");
  const [bikes, setBikes] = useState([]);

  const filterBike = async (biker) => {
    const filtered = bikes.filter((bike) => {
      return bike.brand.toLowerCase().includes(biker.toLowerCase());
    });
    setInput(biker);
    setBikes(filtered);
  };

  useEffect(() => {
    const fetchBikes = async () => {
      const allBikes = await getBikes();
      setBikes(allBikes);
      console.log(allBikes);
    };
    fetchBikes();
  }, filterBike);

  return (
    <div>
      <Layout>
        <Search search={input} setSearch={filterBike} />
        <Bikes bikes={bikes} />
      </Layout>
    </div>
  );
};

export default AllBikes;
