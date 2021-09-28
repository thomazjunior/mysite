import * as React from "react";
import "./Colege.css";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Colege() {
  return (
    <div class="grid-container">
      <div class="left">
        <Grid item xs={12}>
          <ListItemButton className="listButton">
            <ListItemIcon>
              <Avatar
                className="logoCaixa"
                src="https://cdn.worldvectorlogo.com/logos/caixa-economica-federal-1.svg"
              />
            </ListItemIcon>
            <ListItemText primary="Caixa Econômica Federal" />
          </ListItemButton>
          <ListItemText>
            <text>
              <h4>Função: Empregado Público Federal</h4>
              <p>Período: 01/2015 a 06/2020</p>
              <p>
                Resumo: Prestei concurso público no ano de 2014 para a Caixa
                Econômica Federal, um banco do governo brasileiro. Fui aprovado
                em 9º lugar. Ao longo desse período em que estive na empresa,
                exerci principalmente a função de bancário. Porém, fazia
                prestações de serviços relacionadas a TI, relacionadas a
                JavaScript, HTML, CSS, SQL, dentre outras linguagens e
                tecnologias.
              </p>
            </text>
          </ListItemText>
        </Grid>
      </div>

      <div className="middle">
        <Grid container spacing={2}>
          <Grid className="left" item xs={12}>
            <ListItemButton className="listButton">
              <ListItemIcon>
                <Avatar
                  className="logoCaixa"
                  src="https://infoenem.com.br/wp-content/uploads/2017/03/unigranrio_logo-1024x384.png"
                />
              </ListItemIcon>
              <ListItemText primary="Universidade do Grande Rio (UNIGRANRIO)" />
            </ListItemButton>
            <ListItemText>
              <text>
                <h4>Função: Estagiário e Bacharel</h4>
                <p>Período: 01/2014 a 12/2017</p>
                <p>
                  Resumo: Como estagiário, pude ter contato com várias
                  tecnologias e linguagens. Dentre elas, destaca-se PostgreSQL,
                  BI, Java Spring, JSP, JSF, Hibernate, Tomcat. Também fui
                  destaque em algumas turmas, a exemplo das de Segurança de Rede
                  e Teste de Software.
                </p>
              </text>
            </ListItemText>
          </Grid>
        </Grid>
      </div>

      <div class="right">
        <Grid className="right" item xs={12}>
          <ListItemButton className="listButton">
            <ListItemIcon>
              <Avatar
                className="logoCaixa"
                src="data:image/png;base64,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"
              />
            </ListItemIcon>
            <ListItemText primary="Alura - Cursos e Tecnologias)" />
          </ListItemButton>
          <ListItemText>
            <text>
              <h4>Função: Aluno e Estagiário</h4>
              <p>Período: 01/2019 até o momento</p>
              <p>
                Resumo: Na Alura, com mais de 250 horas de cursos realizados, eu
                pude elaborar alguns projetos, os quais podem ser encontrados em
                meu GitHub. Com isso, tive contato com CSS, HTML, JavaScript,
                React, Vue, Angular, PHP, Node SQL, dentre outros frameworks e
                tecnologias.
              </p>
            </text>
          </ListItemText>
        </Grid>
      </div>
    </div>
  );
}
