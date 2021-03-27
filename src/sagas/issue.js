import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchIssueData,
  createIssue,
  updateIssue,
} from "../service/apiRequest";
import {
  FETCH_ISSUE_REQUEST,
  requestIssueSuccess,
  CREATE_ISSUE_REQUEST,
  UPDATE_ISSUE_REQUEST,
} from "../actions";
import { toast } from "react-toastify";

const fullfilled = (message) => {
  toast.success(message, {
    className: "toast-success",
    hideProgressBar: true,
    autoClose: false,
    position: "top-center",
  });
};

const failed = (message) => {
  toast.error(message, {
    className: "toast-error",
    hideProgressBar: true,
    autoClose: false,
    position: "top-center",
  });
};

// ReactじゃなくてJSの話で、sagaの階層でエラーハンドリングしたい場合は apiRequest 部分でもキャッチしてから、自前の例外を投げないとだめ

function* fetchIssueList(action) {
  try {
    // call()は第一引数にsagaで実行したい関数を指定、第二引数でその関数の引数に渡したい値を記載する
    const issueData = yield call(fetchIssueData, action);
    yield put(requestIssueSuccess(issueData));
  } catch (e) {
    failed(e.message);
  }
}

  function* createIssueItem(action) {
    try {
      yield call(createIssue, action.payload);
      yield put({ type: FETCH_ISSUE_REQUEST, payload: { direction: "asc" } });
      yield fullfilled("issueを作成しました");
    } catch (e) {
      failed(e.message);
    }
  }

function* updateIssueItem(action) {
  try {
    yield call(updateIssue, action.payload);
    yield put({ type: FETCH_ISSUE_REQUEST, payload: { direction: "asc" } });
    yield fullfilled("更新に成功しました");
  } catch (e) {
    failed(e.message);
  }
}

export default function* issueSaga() {
  yield takeLatest(FETCH_ISSUE_REQUEST, fetchIssueList);
  yield takeLatest(CREATE_ISSUE_REQUEST, createIssueItem);
  yield takeLatest(UPDATE_ISSUE_REQUEST, updateIssueItem);
}
