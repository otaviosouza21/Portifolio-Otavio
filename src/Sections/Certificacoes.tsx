import React from "react";
import Titulo from "../Components/Titulo";
import { cursos } from "../Class/Listas";

const Certificacoes = () => {
  return (
    <section>
      <Titulo
        titulo="Minhas certificações."
        subTitulo="Conheça minhas competências academicas e certificações"
      />
      <ul>
      {cursos.map((curso, id) => (
          <li key={id}>
            <ul>
              <li>{curso.curso}</li>
              <li>{curso.tipo}</li>
              <li>{curso.instituicao}</li>
              <li>{curso.conclusao}</li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certificacoes;
