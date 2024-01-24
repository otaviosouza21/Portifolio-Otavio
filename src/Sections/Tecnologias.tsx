import React from "react";
import Titulo from "../Components/Titulo";
import { tecnologias,TecTypes } from "../Class/Listas"
import Tecnologia from "../Components/Tecnologia";
import style from '../assets/css/Tecnologias.module.css'



const Tecnologias = () => {
  return (
    <section className={`${style.tecnologias} container`}>
      <Titulo
        titulo="Minhas Tecnologias"
        subTitulo="Hard Skills que domino, e que estão em construção"
      />
      <div className={style.tecLista}>
        {tecnologias.map((tec,id)=>{
           return <Tecnologia> 
            <div  className={style.imgContainer}>
            <img src={tec.img} alt="" />
            </div>
            <p>{tec.text}</p>
           </Tecnologia> 
        })}
        
      </div>
    </section>
  );
};

export default Tecnologias;
