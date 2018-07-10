import {combineReducers} from "redux";
import movieReducers from "./movie";
import activeMovie from "./activeMovie";

const appReducers = combineReducers({
  movies: movieReducers,
  activeMovie: activeMovie
});

export default appReducers;