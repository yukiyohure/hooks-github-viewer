import React from "react";
import TextInput from "../atoms/TextInput";
import styled from "styled-components";
import Button from "../atoms/Button";
import PropTypes from "prop-types";
import NewIssue from "../templates/NewIssue";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchForm = styled.div`
  padding: 0.5rem 1rem;
  width: 100%;
`;

const ActionButtons = styled.div`
  display: flex;
`;

const SearchBar = ({
  profile,
  createIssue,
  updateIssue,
  searchWord,
  onChange,
  showModal,
  hideModal,
  checkedIssueIdList,
  setIsCheckedAllCheckbox,
  setCheckedIssueIdList,
}) => {
  const onClickDelete = () => {
    if (!window.confirm("削除しますか?")) {
      return;
    }
    if (checkedIssueIdList.length) {
      checkedIssueIdList.forEach((number) => {
        updateIssue({ data: { state: "closed" }, issueNumber: number });
      });
      // issueを削除した後は自動的に全件チェックボックスのチェックを外す
      setIsCheckedAllCheckbox(false);
      // issueを削除した後はチェックされたissueのリストをリセット
      setCheckedIssueIdList([]);
    } else if (!checkedIssueIdList.length) {
      alert("削除する issue を選択してください。");
    }
  };
  return (
    <Wrapper>
      <h2>Issue</h2>
      <SearchForm>
        <TextInput
          placeholder="issue名で検索"
          value={searchWord}
          onChange={onChange}
        />
      </SearchForm>
      <ActionButtons>
        <Button
          onClick={() =>
            showModal({
              component: (
                <NewIssue
                  createIssue={createIssue}
                  hideModal={hideModal}
                  profile={profile}
                />
              ),
            })
          }
          styleType="primary"
          label="New"
        />
        <Button onClick={onClickDelete} styleType="danger" label="Delete" />
      </ActionButtons>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  profile: PropTypes.object,
  searchWord: PropTypes.string,
  onChange: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
  addIssue: PropTypes.func,
  updateIssue: PropTypes.func,
  checkedIssueIdList: PropTypes.array,
  setIsCheckedAllCheckbox: PropTypes.func,
  setCheckedIssueIdList: PropTypes.func,
};

export default SearchBar;
