import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
import FavoriteIcon from "@material-ui/icons/Favorite";
import Icon from "@material-ui/core/Icon";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { withRouter } from "react-router-dom";
import AllBookers from "./AllBookers";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  fav: {
    color: red
  },
  card: {
    maxWidth: 345,
    height: 200
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

class MovieCards extends React.Component {
  state = {
    likes: this.props.data.Likes,
    click: false,
    bookers: false
  };
  componentDidMount() {
    console.log(
      this.props.match.url,
      // this.props.users,
      this.props.id,
      this.props.data.Likes
    );
  }
  allbookings = () => {
    // this.props.bookings(this.props.id);

    setTimeout(() => {
      // console.log(this.props.users, this.props.data);
    }, 5000);
    console.log(this.props.users);

    this.props.history.push(`${this.props.match.url}/${this.props.id}`);
  };
  userbooking = tickets => {
    this.props.history.push(
      `${this.props.match.url}/${this.props.id}/${this.props.data.Tickets}`
    );
  };
  add = () => {
    this.setState({
      click: !this.state.click,
      likes: this.props.data.Likes + 1
    });
  };
  dislike = () => {
    this.setState({
      click: !this.state.click,
      likes: this.props.data.Likes
    });
  };
  render() {
    if (!this.state.click && !this.state.bookers) {
      return (
        <Card style={{ maxWidth: "400px" }}>
          <img
            paddingTop="56.25%"
            width="400px"
            height="400px"
            src={this.props.data.url}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.data.Name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.data.Description}
            </Typography>

            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  this.props.like(
                    this.props.match.url,
                    this.props.id,
                    this.props.data.Likes
                  )
                }
              >
                <FavoriteIcon onClick={this.add} />
                <h5>{this.props.data.Likes}</h5>
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                className={useStyles.button}
                endIcon={<Icon>send</Icon>}
                onClick={() => this.userbooking(this.props.data.Tickets)}
              >
                Book Tickets
              </Button>
              Tickets Left:{this.props.data.Tickets}
            </CardActions>
            <CardContent>
              <Link
                to={{
                  state: {
                    user: this.props.users
                  }
                }}
                onClick={this.allbookings}
              >
                Tickets Sold
              </Link>
            </CardContent>
          </CardContent>
        </Card>
      );
    }
    if (this.state.click && !this.state.bookers) {
      return (
        <Card style={{ maxWidth: "400px" }}>
          <img
            paddingTop="56.25%"
            width="400px"
            height="400px"
            src={this.props.data.url}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.data.Name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.data.Description}
            </Typography>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={() =>
                  this.props.dislike(
                    this.props.match.url,
                    this.props.id,
                    this.state.likes
                  )
                }
              >
                <FavoriteIcon style={{ fill: "red" }} onClick={this.dislike} />
                <h5>{this.state.likes}</h5>
              </IconButton>
              <Button
                variant="contained"
                color="primary"
                className={useStyles.button}
                endIcon={<Icon>send</Icon>}
                onClick={() => this.userbooking(this.props.data.Tickets)}
              >
                Book Tickets
              </Button>
              Tickets Left:{this.props.data.Tickets}
            </CardActions>
            <CardContent>
              <Link
                to={{
                  state: {
                    user: this.props.users
                  }
                }}
                onClick={this.allbookings}
              >
                Tickets Sold
              </Link>
            </CardContent>
          </CardContent>
        </Card>
      );
    }
  }
}

export default withRouter(MovieCards);
