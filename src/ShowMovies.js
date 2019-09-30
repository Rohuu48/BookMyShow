import React from "react";
import Icon from "@material-ui/core/Icon";
import MovieCards from "./MovieCards";
import { ThreeDRotation } from "@material-ui/icons/ThreeDRotation";
class ShowMovies extends React.Component {
  componentDidMount() {
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
        <MovieCards movies={this.props.movies} />
      </div>
    );
  }
}

export default ShowMovies;
