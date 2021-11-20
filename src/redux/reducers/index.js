import { combineReducers } from "redux";
import count from "./count_reducer";
import person from "./person_reducer";
const reducer = combineReducers({
  count,
  person
});
export default reducer;
