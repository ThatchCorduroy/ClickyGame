import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="thumbnail col-md-3">
    <span onClick={() => props.clickImage(props.id)} className="click">
      
        <img alt={props.name} src={props.image} />

    </span>
  </div>
);

export default ImageCard;
