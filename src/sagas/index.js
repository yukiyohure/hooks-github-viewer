import { all } from "redux-saga/effects";
import issueSaga from "./issue";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([issueSaga(), userSaga()]);
}
