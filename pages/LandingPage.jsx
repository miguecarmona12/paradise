import React from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{ backgroundImage: "url(/src/assets/background.jpg)" }}
    >
      <div className="content">
        <h1>welcome to paradise</h1>
        <p>Your store for the most beautiful flowers.</p>
        <Link to="/products" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
