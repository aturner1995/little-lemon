import React from "react";
import "./TestimonialCard.css";

function TestimonialCard(props) {
  return (
    <div className="t-card-container">
      <h3 className="rating-title">Rating</h3>
      <div className="rating"><span>5</span></div>
      <div className="t-name">{props.name}</div>
      <div className="t-review">{props.review}</div>
    </div>
  );
}

export default TestimonialCard;
