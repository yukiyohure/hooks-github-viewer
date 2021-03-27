import issueReducer from "./issue";
import profileReducer from "./profile";
import modalReducer from "./ui/modal";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  issue: issueReducer,
  profile: profileReducer,
  modal: modalReducer,
});

export default rootReducers;
