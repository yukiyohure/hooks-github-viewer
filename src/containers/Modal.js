import { connect } from "react-redux";
import ModalWrapper from "../components/organisms/ModalWrapper";
import { hideModal } from "../actions";

const mapStateToProps = (state) => {
  return {
    isOpen: state.modal.isOpen,
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper);
