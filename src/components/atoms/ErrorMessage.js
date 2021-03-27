import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import PropTypes from "prop-types";

const RedField = styled.p`
  color: ${colors.danger};
  padding: 0.5rem;
  border-radius: 6px;
  background: ${colors.dangerBackground};
  margin: 0.5rem 0;
`;

const ErrorMessage = ({ message }) => {
  return <RedField>{message}</RedField>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

export default ErrorMessage;
