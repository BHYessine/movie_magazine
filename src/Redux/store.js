import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  movies: moviesReducer,
});
const store = configureStore(
  { reducer: rootReducer },
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
