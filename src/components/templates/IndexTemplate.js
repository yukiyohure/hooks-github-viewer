import React from "react";
import TabHeader from "../organisms/TabHeader";
import PropTypes from "prop-types";
import Issue from "../../containers/Issue";
import PullRequest from "./PullRequest";

// 実際に表示するcomponentの配列
const tabContents = [
  { key: "issue", component: <Issue /> },
  { key: "pullRequest", component: <PullRequest /> },
];

const IndexTemplate = ({ selectedTab, tabs, onClick }) => {
  return (
    <>
      <TabHeader tabs={tabs} selectedTab={selectedTab} onClick={onClick} />
      {tabContents.map((tabContent) => {
        return tabContent.key === selectedTab ? tabContent.component : <></>;
      })}
    </>
  );
};

IndexTemplate.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
  onClick: PropTypes.func,
};

export default IndexTemplate;
