import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../variables";

// テキストエリア入力欄のスタイリング
const TextAreaInput = styled.textarea`
  outline: none;
  border: none;
  background: none;
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  min-height: 150px;
`;

const Wrapper = styled.div`
  border: 1px solid ${colors.border};
  border-radius: 6px;
  width: 100%;
`;

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <Wrapper>
      <TextAreaInput
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Wrapper>
  );
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
