import { combineReducers } from "redux";
import RecipeReducer from "./Reducer";

const rootReducer = combineReducers({
  data: RecipeReducer,
});

export default rootReducer;
