import { getBikes } from "../../services/bikes";
import { useEffect, useState } from "react";
import Bikes from "../../components/Bikes/Bikes";
import Layout from "../../components/Layout/Layout";
import Search from "../../components/Search/Search";
import "./AllBikes.css";
import Filter from "../../components/Filter/Filter"
import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'


const AllBikes = () => {
  const [input, setInput] = useState("");
  const [bikes, setBikes] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [applySort, setApplySort] = useState(false)
  const [sortType, setSortType] = useState('name-ascending')

  const searchBike = async (biker) => {
    const filtered = bikes.filter((bike) => {
      return bike.brand.toLowerCase().includes(biker.toLowerCase());
    });
    setInput(biker);
    //setBikes(filtered);
    setSearchResult(filtered);
  };

  useEffect(() => {
    const fetchBikes = async () => {
      const allBikes = await getBikes();
      setBikes(allBikes);
      setSearchResult(allBikes);
      console.log(allBikes);
    };
    fetchBikes();

  }, []);


  const handleFilter = (type) => {
    if (type !== '' && type !== undefined) {
      setSortType(type)
    }
    switch (type) {
      case 'name-ascending':
        setSearchResult(AZ(searchResult))
        break
      case 'name-descending':
        setSearchResult(ZA(searchResult))
        break
      case 'price-ascending':
        setSearchResult(lowestFirst(searchResult))
        break
      case 'price-descending':
        setSearchResult(highestFirst(searchResult))
        break
      default:
        break
    }
  }

  if (applySort) {
    handleFilter(sortType)
    setApplySort(false)
  }

  const handleSubmit = (event) => event.preventDefault()


  return (
    <div>
      <Layout>
        <Search search={input} setSearch={searchBike} handleSubmit={handleSubmit} />
        <Filter handleSubmit={handleSubmit} handleFilter={handleFilter} />
        <Bikes bikes={searchResult} />
      </Layout>
    </div>
  );
};

export default AllBikes;
