import React from 'react';
import style from '../assets/css/Slide.module.css';

// Defina o tipo antes de usar
type SlideType = {
  titulo: string;
  imagem: string;
};

const Slide: React.FC<SlideType> = ({ titulo, imagem }) => {

  return (
    <div className={style.slide}>
      <div className={style.imagem}>
        <img src={imagem} alt="" />
          <div className={style.titulo}>
         <h2>{titulo}</h2>
          <p><a href="#">Visite</a></p>
          </div>
      </div>
    </div>
  );
};

export default Slide;
