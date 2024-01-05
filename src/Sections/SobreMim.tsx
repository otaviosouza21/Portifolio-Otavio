import React from "react";
import Titulo from "../Components/Titulo";
import Button from "../Components/Button";

const SobreMim = () => {

  return (
    <section>
      <div>
        <Titulo
          titulo="Desenvolvedor de Software"
          subTitulo="Olá, eu sou o OTAVIO"
        />
        <h3>BEM VINDO!</h3>
        <p>Fico Feliz em te ter aqui!</p>
        <p>
          Sou Otavio, desenvolvedor e analista de sistemas, faço disso minha
          paixao a mais de 3 anos, toandnso isso a minha motivação para uma
          constante evolução
        </p>
        <Button />
      </div>
      <div>
        <div>
          <img src="" alt="github" />
          <img src="" alt="linkedin" />
          <img src="" alt="instagram" />
        </div>
        <div>
          <img src="" alt="Otavio" />
        </div>
      </div>
    </section>
  );
};

export default SobreMim;
