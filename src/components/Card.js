import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "./Card.css";

const Card = ({ image, title, price, description }) => {
  return (
    <div className="card">
      <img width="auto" src={image} alt="greek salad" />
      <div className="dish-info">
        <div className="title">
          <h3>{title}</h3>
          <p className="price">${price}</p>
        </div>
        <p>{description}</p>
        
      </div>
    </div>
  );
};

export default Card;
