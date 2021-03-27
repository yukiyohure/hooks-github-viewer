import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../variables";
import DropdownMenu from "./DropdownMenu";

const HeaderContainer = styled.div`
  display: flex;
  align-items: cener;
  justify-content: space-between;
  background: ${colors.backgroundBlack};
  padding: 1rem;
`;

const Title = styled.h1`
  white-space: nowrap;
  font-size: 2rem;
  a {
    color: ${colors.white};
  }
`;

const HeaderLinkList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  width: 100%;
  li {
    margin-right: 1rem;
    font-size: 1.1rem;
  }
  li > a {
    color: ${colors.white};
    font-size: 1.1rem;
  }
`;

const links = [
  { to: "/issue", key: "issue", linkText: "Issue" },
  { to: "/pull-request", key: "pullRequest", linkText: "Pull Request" },
];

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Title>
          <Link to="/">Github Viewer</Link>
        </Title>
      </div>
      <HeaderLinkList>
        {links.map((link) => {
          return (
            <li key={link.key}>
              {" "}
              {/* Reactが効率よくリストの差分抽出できるように一意のkeyを渡してあげる */}
              <Link to={link.to}>{link.linkText}</Link>
            </li>
          );
        })}
      </HeaderLinkList>
      <DropdownMenu />
    </HeaderContainer>
  );
};

export default Header;
