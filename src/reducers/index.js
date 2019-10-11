import { combineReducers } from "redux";
import users from "./users";
import movieReducer from "./movies";

export const allreducer = combineReducers({
  movies: movieReducer,
  users: users
});
