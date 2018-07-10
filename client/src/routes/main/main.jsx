import * as React from "react";
import { Container, Row, Col } from "reactstrap";

import SearchBar from "../../containers/searchBar";
import MovieList from "./../../containers/movieList";
import MovieDetails from "./../../containers/movieDetails";

export class Main extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Try to find new movie: </h1>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Movie list: </h2>
            <MovieList />
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <h2>Details: </h2>
            <MovieDetails />
          </Col>
        </Row>
      </Container>
    );
  }
}