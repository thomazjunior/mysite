import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Job.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container__job">
      <div className="container__job__">
        <Card sx={{ maxWidth: 290 }}>
          <CardHeader
            avatar={
              <Avatar
                src="data:image/png;base64,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"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Caixa Econômica Federal"
            subheader="Janeiro 05, 2015"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Aprovado no concurso de 2014 da Caixa Econômica Federal (banco público brasileiro),
              tendo sido nomeado em 2015 e permanecendo até 2021. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Descrição:</Typography>
              <Typography paragraph>
                Aprovado em sexto lugar no concurso de 2014 da Caixa Econômica
                Federal, um banco do governo brasileiro. Durante os 6 anos em
                que lá estive, desempenhei principalmente a função de bancário.
                Porém, fazia pretação de serviçoes relacinados a back e
                front-end, dentre outras atividades de automotização das tarefas
                que exercia no meu dia a dia.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className="container__job__">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar
                src="https://pbs.twimg.com/profile_images/1415716722766753794/rLqmniB4.jpg"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Alura - Escola de Tecnologia"
            subheader="Dez 2019 - 2021"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Através dos ensinos passados pelos professores da Alura - Cursos de Tecnologia.
              Atuei principalmente com tecnologias como JavaScript, CSS, PHP, React e suas bibliotecas, MongoDB, Node.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Descrição:</Typography>
              <Typography paragraph>
                Somando mais de 200h de curso na Alura, eu pude
                elaborar diversos projetos freelances, principalmente voltados para o front-end. Permaneço
                até hoje buscando expandir meus conhecimentos. 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="container__job__">
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar
                src="data:image/png;base64,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"
                aria-label="recipe"
              />
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Universidade Unigranrio"
            subheader="Janeiro 01, 2014"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Estagiário na Unigranrio (Universidade na qual eu sou graduado), tendo tido contato com 
              diversos projetos acadêmicos, onde pude ter contato com PostgreSQL, Teste de Software, Inteligência de Dados, 
              Segurança de Redes. 
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Descrição:</Typography>
              <Typography paragraph>
                Durante parte da minha docência, eu desempenhei atividades extra curriculares voltadaas para apoio aos sistemas
                da faculdade Unigranrio, na qual eu sou formado desde 20217. 
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </div>
  );
}
