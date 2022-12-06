import React from 'react';
import '../styles/NavBar.css';
import logo from '../imagenes/lobo2.png';
import logo2 from '../imagenes/lobo3.png';


function cambiaImg () {
    const $img = document.querySelector('.img');
    $img.setAttribute("src", logo2);
}

function devuelveImg () {
    const $img = document.querySelector('.img');
    $img.setAttribute("src", logo);
}

function NavBar() {
    return(
        <header>
            <a href="#inicio" id="logoEv" className="logo">
                <img 
                    src={logo}
                    className='logo img'
                    alt='Logo'
                    onMouseOver={cambiaImg}
                    onMouseOut={devuelveImg}
                />
            </a>
            <input className="trans-bar" type="checkbox" id="menu-bar" />
            <label htmlFor="menu-bar" className="fa fa-bars trans-bar"></label>
            
            <nav className="nav-bar">
                <a href="#inicio">Inicio</a>
                <a href="#sobre-mi">Sobre Mi</a>
                <a href="#habilidades">Habilidades</a>
                <a href="#experiencia">Experiencia</a>
                <a href="#contactame">Contactame</a>
            </nav>
        </header>
    )
}

export default NavBar;