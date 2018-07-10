export default function (state = null, action) {
  switch (action.type) {
    case "MOVIE_SELECTED":
      return action.payload;
    case "MOVIE_SEARCH":
      return action.payload;
    default:
      return state;
  }
}