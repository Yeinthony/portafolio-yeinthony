import React from 'react';
import '../styles/SobreMi.css'
import '../styles/Boton.css'
import imagen from '../imagenes/yeinthony2.png';

function SobreMi() {
  return(
    <section id="sobre-mi" className="sobre-mi">
      <div className="container">
        <div className="container-img">
          <div className="fondo"></div>
          <div className="img-sobre-mi">
            <img src={imagen} alt="" />
          </div>
        </div>
        <div className="contenido">
          <div className="titulo-sm">
            <h3>Sobre Mi</h3>
            <div className="linea"></div>
          </div>
          <div className="parrafos">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio, minus nostrum molestias laborum molestiae laboriosam qui perferendis? Impedit et id veniam perferendis soluta accusamus reprehenderit sunt obcaecati! </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio</p>
          </div>
          <div className="botones">
            <button className="btn">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;

