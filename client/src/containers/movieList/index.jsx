import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {select} from "./../../actions";

class MovieList extends React.Component {
  showList() {
    return this.props.movies.map((movie, index) => {
      return (
        <li
          onClick={() => this.props.select(movie)}
          key={`key-${index}`}
        >
          {movie.Title}
        </li>
      );
    })
  }

  render() {
    return (
      <ol>
        {this.showList()}
      </ol>
    )
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MovieList);