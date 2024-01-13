import React from "react";
import style from '../assets/css/Titulo.module.css'


type TituloProps = {
  titulo: string;
  subTitulo: string;
};


//cria o componente Titulo+Subtitulo 
const Titulo = ({ titulo, subTitulo }: TituloProps) => {
  return (
    <div className={`container ${style.container}`} >
      <p className={style.sub}>{subTitulo}</p>
      <h1 className={style.titulo}>{titulo}<span className={style.ponto}>.</span></h1>
    </div>
  );
};

export default Titulo;
