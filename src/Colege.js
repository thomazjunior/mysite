import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./Colege.css";

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
    <div className="container__colege">
      <div className="container__colege__">
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
            title="CNA - Inglês definitivo"
            subheader="Janeiro 2016 - Dez 2017"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Estudante de idomas, tendo ido até o nível intermediário. 
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
             
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className="container__colege__">
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
            Experiência profissional e acadêmica, onde pude tanto aprimorar meus conhecimentos em linguagens
                e tecnologias, como também pude desempenhar papeis freelances para entregar alguns projetos.
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
                
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>

      <div className="container__colege__">
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
              Segundo melhor da turma de 2014, tendo sido premiado outras vezes durante o curso, como por exemplo
              nas disciplinas de Segurança de Rdes e Teste de Software, onde por ter tido a nota mais alta da turma 
              eu fui premiado com uma bolsa para a certificação BSTQL. 
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
