import React from 'react';
import {InputGroup, InputGroupAddon, Button, Form, Input} from 'reactstrap';
import {bindActionCreators} from "redux";
import {searchMovie} from "../../actions";
import {connect} from "react-redux";

export class SearchBar extends React.Component {
  constructor(){
    super();

    this.dataSearch = this.dataSearch.bind(this);
  }

  dataSearch = e => {
    e.preventDefault();
    const inputField = document.querySelectorAll("#search")[0];
    const value = inputField.value.toLowerCase();

    this.searchMovie(value);
  };

  render() {
    return (
      <Form>
        <InputGroup>
          <Input
            type="text"
            name="search"
            id="search"
            placeholder="Find your movie"/>
          <InputGroupAddon addonType="append">
            <Button onClick={this.dataSearch}>Find movie</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({searchMovie: searchMovie}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(SearchBar);