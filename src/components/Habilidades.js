import React from "react";
import Habilidad from "./Habilidad";
import '../styles/Habilidades.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaPython, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";

function Habilidades(){
  return(
    <section className="habilidades" id="habilidades">
      <div className="container-habilidades">
        <h3 className="title-habiblidades">Habilidades</h3>
        <div className="habilidades-desarrollo">
          <Habilidad key={10} icon={ <FaHtml5 /> } name="HTML" level={80}/>
          <Habilidad key={20} icon={ <FaPhp /> } name="PHP" level={45}/>
          <Habilidad key={30} icon={ <FaCss3Alt /> } name="CSS " level={60}/>
          <Habilidad key={40} icon={ <FaPython /> } name="Python" level={45}/>
          <Habilidad key={50} icon={ <FaJs /> } name="JavaScript" level={70}/>
          <Habilidad key={60} icon={ <GrMysql /> } name="MySQL" level={60}/>
          <Habilidad key={80} icon={ <FaNodeJs /> } name="Node" level={50}/>
          <Habilidad key={90} icon={ <SiMongodb /> } name="MongoDB" level={35}/>
          <Habilidad key={100} icon={ <FaReact /> } name="React" level={50}/>
          <Habilidad key={110} icon={ <FaGithub /> } name="Github" level={60}/>
        </div>
        <div className="habilidades-personales">
          
        </div>
      </div>
    </section>
  );
}

export default Habilidades;