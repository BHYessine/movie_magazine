import { movieList } from "../Components/data";
import { FILTER, GET_MOVIE, GET_MOVIES_FAIL, GET_MOVIES_LOAD } from "./types";

const initialState = {
  Movies: movieList,
  result: movieList,
  Movie: {},
  Search: "",
  Sort: "",
  isLoad: false,
  isError: false,
  message: "",
};

const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_LOAD:
      return {
        ...state,
        isLoad: true,
      };

    case GET_MOVIES_FAIL:
      return {
        ...state,
        isError: true,
        isLoad: false,
      };
    case GET_MOVIE:
      const Movie = state.Movies.filter((item) =>
        item.Title.toLowerCase().startsWith(payload.toLowerCase())
      );
      return {
        ...state,
        Movie: Movie,
      };

    case FILTER:
      const result = state.Movies.filter((item) =>
        item.Title.toLowerCase().startsWith(payload.search.toLowerCase())
      ).sort((a, b) => {
        if (payload.sort === "increasing") {
          return a.Rating - b.Rating;
        }
        if (payload.sort === "descending") {
          return b.Rating - a.Rating;
        }
        if (payload.sort === "title") {
          return a.Title > b.Title ? 1 : -1;
        }
        return state.Movies;
      });

      return {
        ...state,
        isLoad: false,
        result: [...result],
      };

    default:
      return state;
  }
};

export default moviesReducer;
