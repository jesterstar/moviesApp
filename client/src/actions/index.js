const MOVIE_SELECTED = "MOVIE_SELECTED";
const MOVIE_SEARCH = "MOVIE_SEARCH";

export const selectActiveMovie = (movie) => {
  return {
    type: MOVIE_SELECTED,
    payload: movie
  }
};

export const searchMovie = (movie) => {
  return {
    type: MOVIE_SEARCH,
    payload: movie
  }
};