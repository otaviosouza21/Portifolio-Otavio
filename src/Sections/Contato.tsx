import React from "react";
import Titulo from "../Components/Titulo";
import { contatos } from "../Class/Listas";
import style from '../assets/css/Contato.module.css'

const Contato = () => {
  return (
    <footer className={style.contatoContainer}>
      <div className={`${style.contato} container`}>
      <Titulo
        titulo="Entre em Contato"
        subTitulo="Não hesite em entrar em contato, estou aberto a novos desafios!"
        blackground ={true}
      />
      <ul className={style.contatoLista}>
        {contatos.map((contato, id) => (
          <li key={id}>
            <img  src={contato.icone} alt="" />
            <span>{contato.rede}</span>
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
};

export default Contato;
