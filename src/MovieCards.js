import React from "react";
import { logo } from "./logo.svg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Badge,
  IconButton
} from "@material-ui/core";

const MovieCards = () => {
  //console.log(this.props.movies.movies.data().url);
  return (
    <Card>
      <CardActionArea>
        <CardMedia />
      </CardActionArea>
      <Badge>
        <IconButton aria-label="add to favs">
          <FavoriteIcon />
        </IconButton>
      </Badge>
    </Card>
  );
};

export default MovieCards;
