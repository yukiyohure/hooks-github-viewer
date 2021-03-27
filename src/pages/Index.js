import React, { useState } from "react";
import IndexTemplate from "../components/templates/IndexTemplate";

const Index = () => {
  // タブのタイトルを表示するための配列
  const tabs = [
    { key: "issue", label: "Issue" },
    { key: "pullRequest", label: "Pull Request" },
  ];

  // 選択されたタブはlocal stateとして扱う
  const [selectedTab, changeTab] = useState("issue");

  return (
    <IndexTemplate tabs={tabs} selectedTab={selectedTab} onClick={changeTab} />
  );
};

export default Index;
