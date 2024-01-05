import React from "react";

type TituloProps = {
  titulo: string;
  subTitulo: string;
};

//cria o componente Titulo+Subtitulo 
const Titulo = ({ titulo, subTitulo }: TituloProps) => {
  return (
    <div>
      <p>{subTitulo}</p>
      <h1>{titulo}</h1>
    </div>
  );
};

export default Titulo;
