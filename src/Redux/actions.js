import { movieList } from "../Components/data";
import {
  ACTION_MESSAGE,
  FILTER,
  GET_MOVIE,
  GET_MOVIES,
  GET_MOVIES_FAIL,
  GET_MOVIES_LOAD,
} from "./types";

export const getList = () => async (dispatch) => {
  dispatch({ type: GET_MOVIES_LOAD });
  try {
    dispatch({ type: GET_MOVIES, payload: movieList });
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAIL });
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const filterList = (filter) => async (dispatch) => {
  try {
    dispatch({ type: FILTER, payload: filter });
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAIL });
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};

export const getMovie = (title) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE, payload: title });
  } catch (error) {
    dispatch({ type: GET_MOVIES_FAIL });
    dispatch({ type: ACTION_MESSAGE, payload: error.message });
  }
};
