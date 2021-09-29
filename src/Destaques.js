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
import "./Destaques.css";

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
    <div className="container__destaques">
      <div className="container__destaques__">
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
            title="2º Lugar da Turma de 2014 do curso Sistema de Informação"
            subheader="OBS: avaliação geral do curso ao final da graduação."
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary"> 
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
      <div className="container__destaques__">
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
            title="6º Lugar no Concurso de 2014 da Caixa Econômica Federal"
            subheader="Dez 2019 - 2021"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
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

      <div className="container__destaques__">
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
            title="Maior nota na disciplina Teste de Software"
            subheader="Prêmio: bolsa para a certificação BSTQL"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
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
    </div>
  );
}
