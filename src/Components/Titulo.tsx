import React from "react";
import style from '../assets/css/Titulo.module.css'


type TituloProps = {
  titulo: string;
  subTitulo: string;
  blackground?: boolean
};


//cria o componente Titulo+Subtitulo 
const Titulo = ({ titulo, subTitulo,blackground }: TituloProps) => {


  return (
    <div className={`container ${style.container}`} >
      <p className={style.sub}>{subTitulo}</p>
      <h1 style={{color: blackground ? '#FFFFFF' :'#000000' }}  className={style.titulo}>{titulo}<span className={style.ponto}>.</span></h1>
    </div>
  );
};

export default Titulo;
