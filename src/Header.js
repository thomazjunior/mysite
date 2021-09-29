import * as React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import Destaques from "./Destaques";
import Skills from "./Skills";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import Stack from "@mui/material/Stack";
import { IoIosContact } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { GoBookmark } from "react-icons/go";

export default function Header() {
  return (
<<<<<<< HEAD
    <div className="grid__cabecalho">
      <div className="cabecalho__left">
        <Avatar
          className="header__avatar"
          sx={{ width: 130, height: 130 }}
          src="https://media-exp1.licdn.com/dms/image/D5603AQEj0G-HV4jLcw/profile-displayphoto-shrink_400_400/0/1629315155254?e=1638403200&v=beta&t=IF7uTAD3a2zKI21WMl51umCXqQ5Cw0LaPSkkuk80kbs"
        />
        <h4 className="nome">Paulo Thomaz Jr</h4>
        <div className="cabecalho__left__titulo__cargo">
          <p>Desenvolvedor Junior Full Stack</p>
        </div>

        <div className="cabecalho__left__dados">
          <Stack className="stack">
            <p>
              <AiOutlineWhatsApp className="logo" size={15} /> +5521991047560
            </p>
            <p>
              <ImLocation className="logo" size={15} /> Lisboa, Portugal
            </p>
            <p>
              <IoIosContact className="logo" size={15} /> Solteiro
            </p>
            <p>
              <SiGmail className="logo" size={15} /> p.thomaz.junior@gmail.com
            </p>
            <p>
              <ImLinkedin className="logo" size={15} /> @paulothomazjunior
            </p>
            <p>
              <AiFillGithub className="logo" size={15} /> @thomazjunior
            </p>
          </Stack>
=======
      <div className="grid__cabecalho">


        <div className="cabecalho__left">
          <Avatar
            className="header__avatar"
            sx={{ width: 130, height: 130 }}
            src="https://media-exp1.licdn.com/dms/image/D5603AQEj0G-HV4jLcw/profile-displayphoto-shrink_400_400/0/1629315155254?e=1638403200&v=beta&t=IF7uTAD3a2zKI21WMl51umCXqQ5Cw0LaPSkkuk80kbs"
          />
          <h4 className="nome">Paulo Thomaz Jr</h4>
          <div className="cabecalho__left__titulo__cargo">
            <p>Desenvolvedor Junior Full Stack</p>
          </div>
        
        
          <div className="cabecalho__left__dados">
            <Stack className="stack">
              <p>
                <AiOutlineWhatsApp className="logo" size={20} /> +5521991047560
              </p>
              <p>
                <ImLocation className="logo" size={20} /> Lisboa, Portugal
              </p>
              <p>
                <IoIosContact className="logo" size={20} /> Solteiro
              </p>
              <p>
                <SiGmail className="logo" size={20} /> p.thomaz.junior@gmail.com
              </p>
              <p>
                <ImLinkedin className="logo" size={20} /> Perfil LinkedIn
              </p>
              <p>
                <AiFillGithub className="logo" size={20} /> Portifólio
              </p>
            </Stack>
          </div>
        </div>

        <div class="cabecalho__middle">
          <div className="header__center">
            <h4>
              <GoBookmark size={25} />
              Perfil Profissional
            </h4>
            <text className="texto__perfil">
              <p>
                Eu sou um apaixonado por desenvolvimento de tecnologias e
                inovações, com grande interesse por todas as etapas do processo
                de elaboração de um software ou aplicativo.
              </p>
              <p>
                Por isso, após meu bacharelado na Universidade do Grande Rio, eu
                busquei fazer cursos para aperfeiçoar meus conhecimentos, ao
                mesmo tempo em que eu atuava como empregado público na Caixa
                Econômica Federal, empresa na qual sou concursado desde o ano de
                2014.{" "}
              </p>
              <p>
                Na platamaforma de ensino de tecnologia Alura, eu obtive vários
                certificados de conclusão de cursos como de CSS, HTML,
                JavaScript, React, Java, totalizando ao todo, até o momento, 216
                horas de cursos completados. Atualmente, estou mudando do Brasil
                para Lisboa e busco uma oportunidade para poder iniciar essa
                nova fase da minha carreira, da qual eu espero boas experiências
                e aprendizados.
              </p>
            </text>
          </div>
>>>>>>> 7b12197d41bac3538b4c06c71dfe3765b00d7b11
        </div>
      </div>

      <div class="cabecalho__middle">
        <div className="header__center">
          <h4>
            <GoBookmark size={25} />
            Perfil Profissional
          </h4>
          <text className="texto__perfil">
            <p>
              Eu sou um apaixonado por desenvolvimento de tecnologias e
              inovações, com grande interesse por todas as etapas do processo de
              elaboração de um software ou aplicativo.
            </p>
            <p>
              Por isso, após meu bacharelado na Universidade do Grande Rio, eu
              busquei fazer cursos para aperfeiçoar meus conhecimentos, ao mesmo
              tempo em que eu atuava como empregado público na Caixa Econômica
              Federal, empresa na qual sou concursado desde o ano de 2014.{" "}
            </p>
            <p>
              Na platamaforma de ensino de tecnologia Alura, eu obtive vários
              certificados de conclusão de cursos como de CSS, HTML, JavaScript,
              React, Java, totalizando ao todo, até o momento, 216 horas de
              cursos completados. Atualmente, estou mudando do Brasil para
              Lisboa e busco uma oportunidade para poder iniciar essa nova fase
              da minha carreira, da qual eu espero boas experiências e
              aprendizados.
            </p>
          </text>
        </div>
      </div>
<<<<<<< HEAD

      <div className="right">
        <Skills />
      </div>
    </div>
=======
>>>>>>> 7b12197d41bac3538b4c06c71dfe3765b00d7b11
  );
}
