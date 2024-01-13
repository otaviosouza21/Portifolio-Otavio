import React from "react";
import Titulo from "../Components/Titulo";
import style from '../assets/css/Projetos.module.css'

const Projetos = () => {
  return (
    <section className={style.containerSectionProjetos}>
      <div className={style.containerProjetos}>
      <Titulo
        titulo="Meus Projetos"
        subTitulo="Conheça alguns dos meus trabalhos"
      />
      <div>
         slide aqui
      </div>
      </div>
    </section>
  );
};

export default Projetos;
