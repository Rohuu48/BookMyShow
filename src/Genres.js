import React from "react";
import firebase from "./firebase";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { route } from "./action/action";
import Example from "./Example";
import ShowMovies from "./ShowMovies";
const mapStateToProps = store => {
  return {
    movies: store.movies,
    id: store.id
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      route
    },
    dispatch
  );
};

class Genres extends React.Component {
  componentDidMount() {
    this.props.route(`${this.props.match.params.id}`);
    setTimeout(() => {
      console.log(this.props.movies);
    }, 5000);

    console.log(this.props.movies);
  }
  render() {
    return (
      <div>
        <Example />
        <ShowMovies movies={this.props.movies} />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Genres);
