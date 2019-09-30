import { combineReducers } from "redux";

import movieReducer from "./movies";

export const allreducer = combineReducers({
  movies: movieReducer
});
