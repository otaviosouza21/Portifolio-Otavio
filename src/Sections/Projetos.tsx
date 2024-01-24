import React from "react";
import Titulo from "../Components/Titulo";
import style from '../assets/css/Projetos.module.css'
import bicraft from '../assets/img/bickraft.jpg'
import Slide from "../Components/Slide";



const Projetos = () => {
  const slide = React.useRef(null)
  const wrapper = React.useRef(null)


  return (
    <section className={style.containerSectionProjetos}>
      <div className={style.containerProjetos}>
      <Titulo
        titulo="Meus Projetos"
        subTitulo="Conheça alguns dos meus trabalhos"
      />
      <div ref={slide} className={style.slide}>
         <div ref={wrapper} className={style.wrapper}>
            <Slide titulo="Bickraf" imagem={bicraft} />
            <Slide titulo="Bickraf" imagem={bicraft} />
            <Slide titulo="Bickraftik" imagem={bicraft} />
          </div>
      </div>
      </div>
    </section>
  );
};

export default Projetos;
