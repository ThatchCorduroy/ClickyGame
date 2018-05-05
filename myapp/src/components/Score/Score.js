import React from "react";
import "./Score.css";

const Score = props => (
     <h2 className="score">Score: {props.score} | Topscore: {props.topscore}</h2>
);

export default Score;