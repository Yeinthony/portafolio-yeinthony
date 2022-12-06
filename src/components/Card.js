import React from "react";
import "../styles/Card.css";

function Card({ imagen, titulo, descripcion }){
  return(
    <div className="container-card">
      <div className="image">
        <img src={imagen} alt={titulo} />
      </div>
      <div className="contenido-card">
        <h4>{titulo}</h4>
        <p>{descripcion}</p>
      </div>
    </div>
  );
}

export default Card;