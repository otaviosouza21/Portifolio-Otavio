import React from 'react'
import style from '../assets/css/Header.module.css'
import xis from '../assets/img/xis.svg'
import menuHamburguer from '../assets/img/menu-svgrepo-com.svg'

const Header = () => {
  const [menuMobile,setMenuMobile] = React.useState(false)
  const [navTab,setNavTab] = React.useState(0)
  const componentMenu = React.useRef<HTMLUListElement>(null)
  const navMenu = React.useRef<HTMLUListElement>(null)
  const itensMenu: string[] = ['Sobre Mim' ,'Projetos','Tecnologias','Contatos']
 

  function ativaMenu(status:boolean){
    setMenuMobile(status)
  }

  function handleNav(ativo:number){
    setNavTab(ativo)
  }


  return (
    <header className={style.headerContainer}>
       <nav className={`${style.nav} container`}>
        <div>
            <h2 className={style.logo}>OTAVIOSOUZA</h2>
        </div>
            <ul ref={navMenu} className={style.menu}>
              {itensMenu.map((item,id)=>
              <li className={`${navTab === id ? style.itemAtivo : ''}`} onClick={()=>handleNav(id)}>
                <a href={`#${item}`}>{item}</a></li>
              )}
            </ul>
            <img onClick={()=>ativaMenu(true)} 
            className={style.hamburguer} 
            src={menuHamburguer} alt="" />

            {menuMobile && 
            <ul ref={componentMenu} 
            className={`${style.menuMobile} ${menuMobile ? style.active : ''}`}>
              <li><img onClick={()=>ativaMenu(false)} src={xis} alt="" /></li>
              <hr/>
              <li>Sobre Mim</li>
              <hr/>
              <li>Projetos</li>
              <hr/>
              <li>Tecnologias</li>
              <hr/>
              <li>Contato</li>
            </ul>}
        </nav>
    </header>
  )
}

export default Header