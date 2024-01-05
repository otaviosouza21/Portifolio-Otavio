import React from "react";
import Titulo from "../Components/Titulo";
import { contatos } from "../Class/Listas";

const Contato = () => {
  return (
    <footer>
      <Titulo
        titulo="Entre em Contato."
        subTitulo="Não hesite em entrar em contato, estou aberto a novos desafios!"
      />
      <ul>
        {contatos.map((contato, id) => (
          <li key={id}>
            <img src={contato.icone} alt="" />
            <span>{contato.rede}</span>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Contato;
