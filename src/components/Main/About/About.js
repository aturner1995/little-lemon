import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about about-container">
      <div className="about-left">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-sub">Boston</h3>
        <p className="about-description">
        Proudly serving the Boston community since 2012, Little Lemon is dedicated to 
        bringing you the freshest, most delicious lemons and lemon-based products. 
        From our family to yours, thank you for choosing Little Lemon. 
        Come visit us in the heart of Boston!
        </p>
      </div>
      <div className="about-image">
        <div className="about-img1"></div>
      </div>
    </div>
  );
}

export default About;
