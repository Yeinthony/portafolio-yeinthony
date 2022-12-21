import React from "react";
import '../styles/Habilidad.css';

function Habilidad({ icon, name, level }){
  return(
    <div className="container-habilidad">
      <i className="icon-habilidad">{icon}</i>
      <h4 className="title-habilidad">{name}</h4>
      <input className="range-habilidad" type="range" value={level} readOnly/>  
    </div>
  );
}

export default Habilidad;