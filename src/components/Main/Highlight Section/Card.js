import React from "react";
import "./Card.css";
import lemonChicken from '../../../images/card1.jpeg';
import lemonPotatoes from '../../../images/card2.jpg';
import medLemonChicken from '../../../images/card3.jpg';

function Card(props) {
  return (
    <article className="card-container">
      <div className="card-image">
        <img src={props.name === 'Lemon Chicken Roseto' ? lemonChicken : props.name === 'Lemon Grilled Potatoes' ? lemonPotatoes : medLemonChicken} alt={props.name} />
      </div>
      <h3 className="card-title">{props.name}</h3>
      <div className="card-price">{props.price}</div>
      <p className="card-description">
        {props.description}
      </p>
      <div className="card-link">Order Delivery</div>
    </article>
  );
}

export default Card;
