import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../variables";

// テキスト入力欄のスタイリング
const Text = styled.input`
  outline: none;
  border: none;
  background: none;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

const Wrapper = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <Wrapper>
      <Text
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
