// action type を定数で定義するメリット
// https://redux.js.org/recipes/reducing-boilerplate#actions

export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

// manipulate data from api
export const FETCH_ISSUE_REQUEST = "FETCH_ISSUE_REQUEST";
export const FETCH_ISSUE_SUCCEEDED = "FETCH_ISSUE_SUCCEEDED";
export const FETCH_ISSUE_FAILED = "FETCH_ISSUE_FAILED";
export const CREATE_ISSUE_REQUEST = "CREATE_ISSUE_REQUEST";
export const CREATE_ISSUE_SUCCEEDED = "CREATE_ISSUE_SUCCEEDED";
export const CREATE_ISSUE_FAILED = "CREATE_ISSUE_FAILED";
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const UPDATE_ISSUE_REQUEST = "UPDATE_ISSUE_REQUEST";
export const UPDATE_ISSUE_SUCCEEDED = "UPDATE_ISSUE_SUCCEEDED";
export const UPDATE_ISSUE_FAILED = "UPDATE_ISSUE_FAILED";
export const DELETE_ISSUE_REQUEST = "DELETE_ISSUE_REQUEST";
export const DELETE_ISSUE_SUCCEEDED = "DELETE_ISSUE_SUCCEEDED";
export const DELETE_ISSUE_FAILED = "DELETE_ISSUE_FAILED";

export const showModal = ({ component }) => {
  return {
    type: SHOW_MODAL,
    payload: component,
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

export const requestIssue = (data) => {
  return {
    type: FETCH_ISSUE_REQUEST,
    payload: data,
  };
};

export const requestIssueSuccess = (data) => {
  return {
    type: FETCH_ISSUE_SUCCEEDED,
    data: data,
  };
};

export const requestIssueFailed = (error) => {
  return {
    type: FETCH_ISSUE_FAILED,
    error: error,
  };
};

export const requestUser = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const requestUserSuccess = (data) => {
  return {
    type: FETCH_USER_SUCCEEDED,
    data: data,
  };
};

export const requestUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    error: error,
  };
};

export const createIssue = (data) => {
  return {
    type: CREATE_ISSUE_REQUEST,
    payload: data,
  };
};

export const createIssueSuccess = (data) => {
  return {
    type: CREATE_ISSUE_SUCCEEDED,
    payload: data,
  };
};

export const createIssueFailed = (error) => {
  return {
    type: CREATE_ISSUE_FAILED,
    payload: error,
  };
};

export const updateIssue = (data) => {
  return {
    type: UPDATE_ISSUE_REQUEST,
    payload: data,
  };
};

export const updateIssueSuccess = (data) => {
  return {
    type: UPDATE_ISSUE_SUCCEEDED,
    payload: data,
  };
};

export const updateIssueFailed = (error) => {
  return {
    type: UPDATE_ISSUE_FAILED,
    error: error,
  };
};
