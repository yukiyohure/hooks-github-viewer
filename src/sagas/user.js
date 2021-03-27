import { put, call, takeLatest } from "redux-saga/effects";
import { fetchUser } from "../service/apiRequest";
import { FETCH_USER_REQUEST, requestUserSuccess } from "../actions";

function* fetchUserData() {
  try {
    const user = yield call(fetchUser);
    yield put(requestUserSuccess(user));
  } catch (e) {
    console.log(e);
  }
}

export default function* userSaga() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserData);
}
