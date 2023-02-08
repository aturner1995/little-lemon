import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 data-testid="homepage-title" className="hero-title">
          Little Lemon
        </h1>
        <h2 className="hero-sub">Boston</h2>
        <p className="hero-text">
        Indulge in a burst of fresh flavor at Little Lemon Restaurant! 
        Get ready to taste sunshine in every bite, as our passionate chefs bring the essence of a Mediterranean summer to your plate.
        </p>
        <div onClick={() => navigate("/reservations")} className="hero-button">
          <h4 data-testid="reserve-button">Reserve a Table</h4>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image"></div>
      </div>
    </div>
  );
}

export default Hero;
