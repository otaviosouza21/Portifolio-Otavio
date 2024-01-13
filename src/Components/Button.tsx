import React from 'react'
import style from '../assets/css/Button.module.css'

type buttonType ={
  text: string,
  icon?: string
}

const Button = ({text,icon}:buttonType) => {
  console.log(icon);
  
  return (
    <button className={style.button}>
      {text}
      {icon !== null &&  <img className={style.icon} src={icon} alt="" />}
    </button>
  )
}

export default Button