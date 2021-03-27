import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import PropTypes from "prop-types";

const BaseButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0.5rem 1rem;
  margin: 4px;
  text-align: center;
  font-size: 1rem;
  border-radius: 6px;
  outline: none;
  color: ${colors.white};
  width: 100%;
  min-width: 100px;
  font-weight: bold;
  &:active {
    box-shadow: none;
    transform: translateY(2px);
    &:hover {
      box-shadow: none;
    }
  }
`;

const ButtonPrimary = styled(BaseButton)`
  background: ${colors.primary};
  box-shadow: 0 2px ${colors.primaryShadow};
  color: ${colors.white};
  &:hover {
    background: ${colors.hoverPrimary};
    box-shadow: 0 2px ${colors.hoverPrimaryShadow};
  }
`;

const ButtonDanger = styled(BaseButton)`
  background: ${colors.danger};
  box-shadow: 0 2px ${colors.dangerShadow};
  color: ${colors.white};
  &:hover {
    background: ${colors.hoverDanger};
    box-shadow: 0 2px ${colors.hoverDangerShadow};
  }
`;

const buttonStyleLists = {
  default: BaseButton,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

const Button = ({ styleType, label, onClick }) => {
  const Component = buttonStyleLists[styleType] || buttonStyleLists.default;
  return <Component onClick={onClick}>{label}</Component>
};

Button.propTypes = {
  styleType: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
