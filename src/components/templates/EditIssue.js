import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import ErrorMessage from "../atoms/ErrorMessage";
import { validateRequired } from "../../utils";

const Wrapper = styled.div`
  max-width: 598px;
  margin: auto;
`;

const InputSection = styled.div`
  padding: 2rem 0 1rem;
`;

const MessageContainer = styled.section`
  padding: 1rem;
  min-height: 119px; /* エラー文が出てきてもボタンがしたに追いやられないよう、事前にスペースを開けておく。*/
`;

const FieldLabel = styled.label`
  display: block;
  padding: 0.5rem 0;
`;

const Field = styled.div`
  padding: 1rem;
`;

const CloseButton = styled.a`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin: 4px;
  min-width: 100px;
  text-align: center;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem;
  button {
    width: auto;
  }
`;

const EditIssue = ({ issue, hideModal, updateIssue }) => {
  const [issueState, setIssueState] = useState(issue.state);
  const [issueTitle, setIssueTitle] = useState(issue.title);
  const [issuebody, setIssuebody] = useState(issue.body);
  const [errors, setErrors] = useState({ title: "", body: "" });

  const onChangeStatus = (e) => {
    setIssueState(e.target.value);
  };

  const onSubmit = () => {
    const titleError = validateRequired(
      issueTitle,
      "タイトルを入力してください"
    );
    const bodyError = validateRequired(issuebody, "説明を入力してください");

    if (titleError || bodyError) {
      setErrors({ title: titleError, body: bodyError });
      return;
    }

    const payload = {
      data: {
        title: issueTitle,
        state: issueState,
        body: issuebody,
      },
      issueNumber: issue.number
    };
    updateIssue(payload);
    hideModal();
  };

  return (
    <Wrapper>
      <h2>Issueを編集</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput
            placeholder="タイトルを入力してください"
            value={issueTitle}
            onChange={setIssueTitle}
          />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea
            placeholder="説明を入力してください"
            value={issuebody}
            onChange={setIssuebody}
          />
        </Field>
        <Field>
          <select value={issueState} onChange={onChangeStatus}>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
          </select>
        </Field>
      </InputSection>
      <MessageContainer>
        {errors.title && <ErrorMessage message={errors.title}></ErrorMessage>}
        {errors.body && <ErrorMessage message={errors.body}></ErrorMessage>}
      </MessageContainer>
      <Footer>
        <Button styleType="primary" label="更新" onClick={onSubmit} />
        <CloseButton onClick={hideModal}>閉じる</CloseButton>
      </Footer>
    </Wrapper>
  );
};

EditIssue.propTypes = {
  issue: PropTypes.object,
  hideModal: PropTypes.func,
  updateIssue: PropTypes.func,
};

export default EditIssue;
