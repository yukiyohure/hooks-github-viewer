import React, { forwardRef } from "react";
import styled from "styled-components";
import { colors } from "../../variables";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  position: absolute;
  right: 20px;
  width: 200px;
  padding: 0.5rem 0;
  color: ${colors.defaultText};
  border-radius: 2px;
  margin-top: 1rem;
  background: ${colors.white};
  box-shadow: rgba(51, 51, 51, 0.15) 1px 1px 4px 1px;
`;

const MenuItem = styled.li`
  a {
    color: ${colors.defaultText};
    font-size: 1rem;
    padding: 0.5rem;
    display: block;
    font-weight: 500;
    &:hover {
      background: ${colors.menuBackground};
      color: ${colors.white};
    }
  }
`;

const MenuLinks = [
  { key: "top", label: "Top", to: "/" },
  { key: "profile", label: "Your Profile", to: "/profile" },
  { key: "issue", label: "Issue", to: "/issue" },
  { key: "pullrequest", label: "Pull Request", to: "/pull-request" },
];

const Menu = forwardRef(({ onClick }, ref) => {
  return (
    <Wrapper ref={ref}>
      <ul>
        {MenuLinks.map(({ key, label, to }) => {
          return (
            <MenuItem key={key}>
              <Link to={to} onClick={onClick}>
                {label}
              </Link>
            </MenuItem>
          );
        })}
      </ul>
    </Wrapper>
  )
});

Menu.displayName = 'Menu';

Menu.propTypes = {
  onClick: PropTypes.func,
};

export default Menu;
