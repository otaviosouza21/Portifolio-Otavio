import React, { ReactNode } from 'react'
import style from '../assets/css/Tecnologias.module.css'

const Tecnologia = ({children}:{children: ReactNode}) => {
  return (
    <div className={style.tecnologia}>
     {children}
    </div>
  )
}

export default Tecnologia
