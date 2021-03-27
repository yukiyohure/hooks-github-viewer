import { FETCH_USER_SUCCEEDED } from "../actions";

const initialState = {
  data: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
