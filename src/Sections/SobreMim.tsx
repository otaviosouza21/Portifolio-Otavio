import React from "react";
import Titulo from "../Components/Titulo";
import Button from "../Components/Button";
import style from '../assets/css/SobreMim.module.css'
import otavio from '../assets/img/oteviopng.png'
import linkedin from '../assets/img/linkedin.svg'
import github from '../assets/img/github.svg'
import instagram from '../assets/img/instagram2.svg'
import download from '../assets/img/download-svgrepo-com.svg'


const SobreMim = () => {

  return (
    <section className={style.containerSectionSobre}  id="Sobre Mim">
      <div className={`${style.sobreContainer} container`}>
      <div className={style.sobreDescricao}>
        <Titulo
          titulo="Desenvolvedor de Software"
          subTitulo="Olá, eu sou o OTAVIO"
        />
        <h3>BEM VINDO!</h3>
        <p className={style.paragrafo}>
          Fico Feliz em te ter aqui!<br></br>
          Sou Otavio, <b>desenvolvedor e analista de sistemas</b>, faço disso minha
          paixao a mais de 3 anos, tornando isso a minha motivação para uma
          <b>constante evolução</b>.
        </p>
        <Button text='BAIXAR CV' icon={download} />
      </div>
      <div className={style.foto}>
        <div className={style.fotoIcons}>
          <a href="https://github.com/otaviosouza21">
            <img   src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/otavio-souza-6a7868169/">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/otavioits/">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <div className={style.fotoOtavio}>
          <img src={otavio} alt="Otavio" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default SobreMim;
