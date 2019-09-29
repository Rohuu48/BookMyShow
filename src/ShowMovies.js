import React from "react";

class ShowMovies extends React.Component {
  render() {
    return (
      <div>
        {this.props.movies.map(item => {
          console.log(item);
        })}
      </div>
    );
  }
}

export default ShowMovies;
