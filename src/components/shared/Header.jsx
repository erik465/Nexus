import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledContainer = styled.header`
  background-color: #222224;
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 100px;
    width: 100px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;
const StyledLink = styled(NavLink)`
  color: #eaeaea;
  text-decoration: none;
  transition: 1s;
  outline: none;

  &.active {
    color: #ff7b9c;
  }

  &:hover {
    color: #ff7b9c;
  }
`;

const Header = () => {
  return (
    <StyledContainer>
      <img
        src={`${process.env.PUBLIC_URL}/Logo-no-bg.svg`}
        alt="Nexus logo"
      ></img>
      <NavContainer>
        <StyledLink to="/dashboard">Dashboard</StyledLink>
        <StyledLink to="/messages">Messages</StyledLink>
        <StyledLink to="/collaboration">Collaboration</StyledLink>
        <StyledLink to="">Soon</StyledLink>
        <StyledLink to="">Soon</StyledLink>

        <StyledLink to="/profile">Profile</StyledLink>
      </NavContainer>
    </StyledContainer>
  );
};

export default Header;
