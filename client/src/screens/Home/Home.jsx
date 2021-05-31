import React from "react";
import Layout from "../../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-div">
        <div className="button-container">
          <img
            src="https://www.rei.com/dam/content_team_071018_0071_htc_bike_hero_lg.jpg"
            alt="bike"
            className="bike-image"
          />
          <NavLink className="get-started" to="/create-bike">
            <button type="button" className="btn">
              GET STARTED
            </button>
          </NavLink>
        </div>
        <div className="prompts">
          <h1>HOW IT WORKS</h1>
          <h2>SUBMIT YOUR BIKE PHOTO AND BASIC DETAILS</h2>
        </div>
        <div className="sellbuyride">
          <h3>SELL</h3>
          <h3>BUY</h3>
          <h3>RIDE</h3>
        </div>
        <div className="home-icons">
          <img
            src="https://img.icons8.com/wired/100/000000/get-cash.png"
            alt="sell"
          />
          <img
            src="https://img.icons8.com/wired/100/000000/buy.png"
            alt="buy"
          />
          <img
            src="https://img.icons8.com/wired/100/000000/bicycle.png"
            alt="ride"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
