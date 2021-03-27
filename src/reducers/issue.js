import {
  FETCH_ISSUE_SUCCEEDED,
} from "../actions";

const issueData = [];

const initialState = {
  index: issueData.length, // dataの長さ ≒ dataのidの値
  data: issueData, // data自体
};

const issueReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ISSUE_SUCCEEDED:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default issueReducer;
