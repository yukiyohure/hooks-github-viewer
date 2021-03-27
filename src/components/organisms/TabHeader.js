import React from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import PropTypes from "prop-types";

const TabList = styled.ul`
  display: flex;
`;

const Tab = styled.li`
  width: 100%;
  text-align: center;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 6px 6px 0 0;
  border-top: ${({ isActive }) =>
    isActive ? `1px solid ${colors.border}` : ""};
  border-bottom: ${({ isActive }) =>
    isActive ? "" : `1px solid ${colors.border}`};
  border-left: ${({ isActive }) =>
    isActive ? `1px solid ${colors.border}` : ""};
  border-right: ${({ isActive }) =>
    isActive ? `1px solid ${colors.border}` : ""};
`;

const TabHeader = ({ selectedTab, tabs, onClick }) => {
  return (
    <TabList>
      {tabs.map(({ key, label }) => {
        const isActive = key === selectedTab;
        return (
          <Tab isActive={isActive} key={key} onClick={() => onClick(key)}>
            {label}
          </Tab>
        );
      })}
    </TabList>
  );
};

TabHeader.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.array,
  onClick: PropTypes.func,
};

export default TabHeader;
