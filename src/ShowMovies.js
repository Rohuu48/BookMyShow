import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";
import MovieCard from "./MovieCard";
import { ThreeDRotation } from "@material-ui/icons/ThreeDRotation";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { bookings } from "./action/action";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

class ShowMovies extends React.Component {
  constructor(props) {
    super(props);
    var today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

    this.state = {
      date: date,
      loading: true,
      abc:
        this.props.match.params.id.charAt(0).toUpperCase() +
        this.props.match.params.id.substr(1).toLowerCase(),
      genre: this.props.match.params.id.charAt(0).toUpperCase()
    };
  }
  componentDidMount() {
    //console.log(this.props.match.params.id);
    //this.props.route(`${this.props.match.params.id}`);
    /**  setTimeout(() => {
      this.props.movies.movies.map(item => {
        console.log(item.data().Description);
      });
      console.log(this.props.movies.movies);
    }, 3000);*/
    // console.log(this.props.movies.movies);
  }
  render() {
    return (
      <div>
        <Card className={useStyles.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={useStyles.avatar}>
                {this.state.genre}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.state.abc}
            subheader={this.state.date}
          />
        </Card>
        <div>
          {" "}
          <Grid container spacing={24}>
            {this.props.movies.movies.map(item => {
              return (
                <MovieCard
                  data={item.data()}
                  dislike={this.props.dislike}
                  id={item.id}
                  route={this.props.route}
                  like={this.props.like}
                  bookTickets={this.props.bookTickets}
                  match={this.props.match}
                />
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
}

export default withRouter(ShowMovies);
