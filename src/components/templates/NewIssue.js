import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../atoms/TextInput";
import TextArea from "../atoms/TextArea";
import Button from "../atoms/Button";
import PropTypes from "prop-types";
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
  min-height: 119px; /* エラー文が出てきてもボタンがしたに追いやられないよう、事前にスペースを開けておこう。*/
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

const NewIssue = ({ hideModal, createIssue }) => {
  const [issueTitle, setIssueTitle] = useState("");
  const [issuebody, setIssuebody] = useState("");
  // 表示するためのエラーメッセージオブジェクト。keyにあるだけの文が潜在的なエラー分の全て。
  const [errors, setErrors] = useState({ title: "", body: "" });

  const onSubmit = () => {
    // バリデーションは種類ごとに関数で切り分けて、拡張性を重視してみる(1種類しかないけど)
    const titleError = validateRequired(
      issueTitle,
      "タイトルを入力してください"
    );
    const bodyError = validateRequired(
      issuebody,
      "説明を入力してください"
    );

    // エラーがあった場合は早期リターンでdispatchさせない
    if (titleError || bodyError) {
      setErrors({ title: titleError, body: bodyError });
      return;
    }

    const issue = {
      title: issueTitle,
      body: issuebody
    };
    createIssue(issue);
    hideModal(); // issueの追加処理が終わったらモーダルを閉じる
  };

  return (
    <Wrapper>
      <h2>Issueを追加</h2>
      <InputSection>
        <Field>
          <FieldLabel>タイトル</FieldLabel>
          <TextInput
            placeholder="タイトルを入力してください"
            onChange={setIssueTitle}
          />
        </Field>
        <Field>
          <FieldLabel>説明</FieldLabel>
          <TextArea
            placeholder="説明を入力してください"
            onChange={setIssuebody}
          />
        </Field>
      </InputSection>
      <MessageContainer>
        {errors.title && <ErrorMessage message={errors.title}></ErrorMessage>}
        {errors.body && (
          <ErrorMessage message={errors.body}></ErrorMessage>
        )}
      </MessageContainer>
      <Footer>
        <Button styleType="primary" label="作成" onClick={onSubmit} />
        <CloseButton onClick={hideModal}>閉じる</CloseButton>
      </Footer>
    </Wrapper>
  );
};

NewIssue.propTypes = {
  hideModal: PropTypes.func,
  addIssue: PropTypes.func,
  profile: PropTypes.object,
};

export default NewIssue;
