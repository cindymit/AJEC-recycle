import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-div">
        <div className="button-container">
          <img
            src="https://www.rei.com/dam/content_team_071018_0071_htc_bike_hero_lg.jpg"
            alt="bike"
          />
          <button type="click" className="btn">GET STARTED</button>
        </div>
        {/* <img
          src="https://www.rei.com/dam/content_team_071018_0071_htc_bike_hero_lg.jpg"
          alt="temp_bike_img"
          width="100%"
          height="500px"
        /> */}
        <div className="prompts">
          <h1>HOW IT WORKS</h1>
          <h2>SUBMIT YOUR BIKE PHOTO AND BASIC DETAILS</h2>
        </div>
        <div className="sellbuyride">
          <h3>SELL</h3>
          <h3>BUY</h3>
          <h3>RIDE</h3>
        </div>
        {/* <div className="get-started">
          <button type="click">GET STARTED</button>
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
