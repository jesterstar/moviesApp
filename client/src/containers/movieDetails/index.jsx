import * as React from "react";
import {connect} from "react-redux";

class MovieDetails extends React.Component {
  render() {
    if (!this.props.movies) return (<p>Select your movie</p>);
    return (
      <div>
        <h2>{this.props.movies.Title}</h2>
        <p>
          Release year {this.props.movies.ReleaseYear},
          Format {this.props.movies.Format}
        </p>
        {Object.keys(this.props.movies.Stars).map((v, index) => {
          const name = this.props.movies.Stars[v];
          return (
            <span key={`star-id-${index}`}>
              {name},
            </span>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.activeMovie
  };
}

export default connect(mapStateToProps)(MovieDetails);