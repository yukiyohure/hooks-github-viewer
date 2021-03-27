import React, { useEffect, useState } from "react";
import SearchBar from "../organisms/SearchBar";
import styled from "styled-components";
import IssueContents from "../organisms/IssueContents";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
`;

const Issue = ({
  issueData,
  profile,
  createIssue,
  updateIssue,
  showModal,
  hideModal,
  requestIssue,
}) => {
  // searchBarとIssueContentsのコンポーネントで扱うstateなので親であるIssueで管理してあげる
  const [searchWord, setSearchWord] = useState("");
  // このcheckBoxの状態も、searchBarのdeleteボタンとIssueContentのcheckBoxの2つの子コンポーネントで使用するのでここで管理
  const [checkedIssueIdList, setCheckedIssueIdList] = useState([]);
  const [isCheckedAllCheckbox, setIsCheckedAllCheckbox] = useState(false);
  const filterdIssueData = issueData?.filter((item) => {
    return item.title.includes(searchWord);
  });

  // requestedIssue自体がuseEffectの外の変数なので、requestedIssueの追加でeslintから警告が出る
  useEffect(() => {
    // requestIssue()を実行すると、stateが変更されるので、
    // requestIssue()→state更新→requestIssue()→state更新...のように無限ループが発生してしまう。
    // その対策としてuseEffectを使ってコンポーネントのマウント時一度だけ呼ぶようにする。
    requestIssue({ direction: "asc" });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <SearchBar
        profile={profile}
        showModal={showModal}
        createIssue={createIssue}
        updateIssue={updateIssue}
        searchWord={searchWord}
        onChange={setSearchWord}
        hideModal={hideModal}
        checkedIssueIdList={checkedIssueIdList}
        setIsCheckedAllCheckbox={setIsCheckedAllCheckbox}
        setCheckedIssueIdList={setCheckedIssueIdList}
      />
      <IssueContents
        issueData={filterdIssueData}
        profile={profile}
        showModal={showModal}
        hideModal={hideModal}
        updateIssue={updateIssue}
        checkedIssueIdList={checkedIssueIdList}
        setCheckedIssueIdList={setCheckedIssueIdList}
        isCheckedAllCheckbox={isCheckedAllCheckbox}
        setIsCheckedAllCheckbox={setIsCheckedAllCheckbox}
      />
    </Wrapper>
  );
};

Issue.propTypes = {
  issueData: PropTypes.array,
  profile: PropTypes.object,
  createIssue: PropTypes.func,
  updateIssue: PropTypes.func,
  showModal: PropTypes.func,
  hideModal: PropTypes.func,
};

export default Issue;
