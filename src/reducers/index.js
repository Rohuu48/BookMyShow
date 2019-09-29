import { combineReducers } from "redux";

import movies from "./movies";

export const allreducer = combineReducers({
  movies: movies
});
