import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";

const rootReducers = combineReducers({
  courses,
  authors
});

export default rootReducers;
