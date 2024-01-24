import React from "react";
import Titulo from "../Components/Titulo";
import { cursos } from "../Class/Listas";
import style from '../assets/css/Certificacoes.module.css'

const Certificacoes = () => {
  return (
    <section className={style.certificacoesContainer}>
      <div className={`${style.certificacoes} container`}>
      <Titulo
        titulo="Minhas certificações"
        subTitulo="Conheça minhas competências academicas e certificações"
      />
      <ul className={`${style.listaCertificacoes}`} >
      {cursos.map((curso, id) => (
          <li key={id}>
            <ul className={style.informacoes}>
              <li>{curso.curso}</li>
              <li>{curso.tipo}</li>
              <li>{curso.instituicao}</li>
              <li>{curso.conclusao}</li>
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default Certificacoes;
