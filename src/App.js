import * as React from "react";
import "./App.css";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Skills from "./Skills";
import { ImLinkedin } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import Stack from '@mui/material/Stack';
import {IoIosContact} from "react-icons/io";
import {ImLocation} from "react-icons/im";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";

function App() {
  return (
    <Grid container spacing={3} className="header">
      <Grid item xs={4}>
        <Avatar
          className="header__avatar"
          sx={{ width: 170, height: 170 }}
          src="https://media-exp1.licdn.com/dms/image/D5603AQEj0G-HV4jLcw/profile-displayphoto-shrink_400_400/0/1629315155254?e=1638403200&v=beta&t=IF7uTAD3a2zKI21WMl51umCXqQ5Cw0LaPSkkuk80kbs"
        />
        <div className="header__name">
          <p className="name">Paulo Thomaz Jr.</p>
          <p>Desenvolvedor Junior Full Stack</p>
        </div>
        <div className="header__title">
          <Stack className="stack">
            <p><AiOutlineWhatsApp className="logo" size={30} />    +5521991047560</p>
            <p><ImLocation className="logo"   size={30} />    Lisboa, Portugal</p>
            <p><IoIosContact className="logo" size={30} />    Solteiro</p>
            <p><SiGmail className="logo" size={30} />    p.thomaz.junior@gmail.com</p>
            <p><ImLinkedin className="logo" size={30} />    Perfil LinkedIn</p>
            <p><AiFillGithub className="logo" size={30} />    Portifólio</p>
          </Stack>
          <div className="header__network">
          </div>
        </div>
      </Grid>
      <Grid item xs={3}>
        <div className="header__center">
          <h4>Perfil Profissional</h4>
          <text>
            Sou um profissional de sucesso, focado na solução de problemas, com
            grande interesse por tecnologia e suas inovações. Me interesso por
            todas as áreas, back e front-end.
          </text>
        </div>
      </Grid>
      <Grid item xs={4}>
        <Skills />
      </Grid>
    </Grid>
  );
}

export default App;
