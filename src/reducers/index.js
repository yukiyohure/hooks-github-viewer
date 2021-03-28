import issueReducer from "./issue";
import modalReducer from "./ui/modal";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  issue: issueReducer,
  modal: modalReducer,
});

export default rootReducers;
