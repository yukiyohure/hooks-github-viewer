import { connect } from "react-redux";
import { requestUser } from '../actions'
import Profile from "../pages/Profile";

const mapStateToProps = (state) => {
  return {
    user: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: () => {
      dispatch(requestUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
