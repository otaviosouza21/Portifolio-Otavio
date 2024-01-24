import sql from '../assets/img/mysql.svg'
import bootstrap from '../assets/img/bootstrap.svg'
import php from '../assets/img/php.svg'
import typescript from '../assets/img/typescript.svg'
import git from '../assets/img/git.svg'
import github from '../assets/img/github.svg'
import react from '../assets/img/react.svg'
import javascript from '../assets/img/javascript.svg'
import css from '../assets/img/css.svg'
import html from '../assets/img/html.svg'
import linkedin from '../assets/img/linkedin.svg'
import instagram from '../assets/img/instagram.svg'
import email from '../assets/img/email.svg'
import github2 from '../assets/img/github.svg'
import waths from '../assets/img/wathsapp.svg'





type cursosType = {
  curso: string;
  tipo: string;
  instituicao: string;
  conclusao: string;
};

type ContatoTypes = {
  icone: string;
  rede: string;
};

export type TecTypes ={
  img:string;
  text:string;
}

export const tecnologias: TecTypes[] = [
  {
    img:html,
    text:"HTML 5"
  },
  {
    img:css,
    text:"CSS 3"
  },
  {
    img:javascript,
    text:"JavaScript"
  },
  {
    img:typescript,
    text:"TypeScript"
  },
  {
    img:react,
    text:"React JS"
  },
  {
    img:bootstrap,
    text:"Bootstrap"
  },
  {
    img:git,
    text:"Git"
  },
  {
    img:github,
    text:"GitHub"
  },
  {
    img:php,
    text:"PHP"
  },
  {
    img:sql,
    text:"MySQL"
  },
]

export const cursos: cursosType[] = [
  {
    curso: "Analise e Desenvolvimento de Sistemas",
    tipo: "Graduação",
    instituicao: "Centro Universitario Braz Cubas",
    conclusao: "Concluido 2023",
  },
  {
    curso: "HTML e CSS",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 48 Horas",
  },
  {
    curso: "React JS",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 36 Horas",
  },
  {
    curso: "Javascript ES6",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 74 Horas",
  },
  {
    curso: "UI Design",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 34 Horas",
  },
  {
    curso: "TypeScript",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 22 Horas",
  },
  {
    curso: "CSS Avançado",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 18 Horas",
  },
  {
    curso: "React com Typescript",
    tipo: "Extracurricular",
    instituicao: "Origamid",
    conclusao: "Concluido 20 Horas",
  },
];

export const contatos: ContatoTypes[] = [
  {
    icone: linkedin,
    rede: "/in/otavio-souza21",
  },
  {
    icone: instagram,
    rede: "/otavioits",
  },
  {
    icone: email,
    rede: "/otaviosouzalu@gmail.com",
  },
  {
    icone: github2,
    rede: "/otaviosouza21",
  },
  {
    icone: waths,
    rede: "11.96493-2123",
  },
];
