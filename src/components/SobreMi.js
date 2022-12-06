import React from 'react';
import Card from '../components/Card'
import '../styles/SobreMi.css'
import '../styles/Boton.css'
import anime from "../imagenes/anime.jpg";
import lectura from "../imagenes/lectura.jpg";
import series from "../imagenes/series.jpg";
import musica from "../imagenes/musica.jpg";

function SobreMi({ imagen, parrafo1, parrafo2 }) {
  return(
    <section id="sobre-mi" className="sobre-mi">
      <div className="container-sobreMi">
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
            <p> {parrafo1} </p>
            <p> {parrafo2} </p>
          </div>
          <div className="botones">
            <button className="btn">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
      <div className="hobbies">
        <h4 className="hobbie-title">Hobbies</h4>
        <div className="hobbie-div">
          <Card 
            imagen={musica} 
            titulo="Música" 
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio" 
          />
          <Card 
            imagen={lectura} 
            titulo="Lectura" 
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio" 
          />
        </div>
        <div className="hobbie-div">
          <Card 
            imagen={series} 
            titulo="Series" 
            descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio" 
          />
          <Card 
            imagen={anime} titulo="Anime" descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nobis repellendus odio" 
          />
        </div>
      </div>
    </section>
  );
}

export default SobreMi;

