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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar  
          src="data:image/png;base64,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"
          aria-label="recipe" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Empregado Público Federal"
        subheader="Janeiro 05, 2015"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Empregado público do concurso de 2014.
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
            Federal, um banco do governo brasileiro. Durante os 6 anos em que lá
            estive, desempenhei principalmente a função de bancário. Porém,
            fazia pretação de serviçoes relacinados a back e front-end, dentre
            outras atividades de automotização das tarefas que exercia no meu
            dia a dia.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
