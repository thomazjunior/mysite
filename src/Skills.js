import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DiJava } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { BsCode} from "react-icons/bs";
import {SiPostgresql} from "react-icons/si";
import {BsCodeSlash} from "react-icons/bs"

import "./Skills.css";

export default function NestedList() {
  return (
    <div className="headerLeft">
      <div className="logo__titulo">
        <h4><BsCode size={20}/>Linguagens e Tecnologias<BsCodeSlash size={20}/></h4>
      </div>
      <List className="list">
        <ListItemButton className="listButton">
          <ListItemIcon>
            <DiJava size={50} />
          </ListItemIcon>
          <ListItemText primary="Java" />
        </ListItemButton>

        <ListItemButton className="listButton">
          <ListItemIcon>
            <DiJavascript size={50} />
          </ListItemIcon>
          <ListItemText primary="   JavaScript" />
        </ListItemButton>

        <ListItemButton className="listButton">
          <ListItemIcon>
            <DiReact size={50} />
          </ListItemIcon>
          <ListItemText primary="React" />
        </ListItemButton>

        <ListItemButton className="listButton">
          <ListItemIcon>
            <DiPhp size={50} />
          </ListItemIcon>
          <ListItemText primary="PHP" />
        </ListItemButton>

        <ListItemButton className="listButton">
          <ListItemIcon>
            <SiPostgresql size={50} />
          </ListItemIcon>
          <ListItemText primary="PostgreSQL" />
        </ListItemButton>

      </List>
    </div>
  );
}
