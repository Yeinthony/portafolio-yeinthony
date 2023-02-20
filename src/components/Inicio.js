import React from 'react';
import '../styles/Inicio.css'
import '../styles/Boton.css'

function WratingMachine(text = '', tiempo=200, idMaquinaEscribir=''){
    const $maquina = document.getElementById(idMaquinaEscribir)
    let arrayCaracteres = text.split('');
    $maquina.innerHTML = '';
    let cont = 0;
    let escribir = setInterval(function(){
        $maquina.innerHTML += arrayCaracteres[cont]; 
        cont++;
        if (cont === arrayCaracteres.length) {
            cont = 0;
            $maquina.innerHTML = '';
        }
    }, tiempo);
  }
  
  document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(function(){
        WratingMachine("Yeinthony  ", 250, "maquina-escribir");
    }, 1000);
  });
  

function Inicio( {imagen, nombre, especialidad} ) {
    return(
        <section id="inicio" className="inicio">
            <div className="imgPortada">
                <img src={imagen} alt="" />
            </div>
            <div className="titulo">
                <h3>Hola, soy</h3>
                <span className="mayor-que">{'> '}</span>
                <span id="maquina-escribir">{nombre}</span>
                <h4>{especialidad}</h4>
                <a href="#sobre-mi" className="btn">SOBRE MI</a>
            </div>
        </section>
    );
}

export default Inicio;