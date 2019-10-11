import React from "react";
import firebase from "./firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { route, like, bookTickets, dislike, bookings } from "./action/action";
import Example from "./Example";
import ShowMovies from "./ShowMovies";
import Example2 from "./Example2";
import { withRouter } from "react-router-dom";
const mapStateToProps = store => {
  return {
    movies: store.movies,
    id: store.id
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      route,
      like,
      dislike,
      bookTickets
    },
    dispatch
  );
};

class Genres extends React.Component {
  componentDidMount() {
    this.props.route(`${this.props.match.params.id}`);
    console.log(this.props.match.params.id);
    setTimeout(() => {
      console.log(this.props.movies.movies);
    }, 5000);

    console.log(this.props.movies.movies);
  }
  render() {
    return (
      <div>
        <Example2 />
        <ShowMovies
          route={this.props.route}
          movies={this.props.movies}
          id={this.props.id}
          like={this.props.like}
          dislike={this.props.dislike}
          bookTickets={this.props.bookTickets}
          match={this.props.match.params.id}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Genres)
);
