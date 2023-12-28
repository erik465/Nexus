import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/selectors";
import { BsPerson } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

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
  display: flex;
  gap: 5px;
  align-items: center;
  &.active {
    color: #ff7b9c;
  }

  &.active > .icon {
    fill: #ff7b9c;
  }

  &:hover {
    color: #ff7b9c;
  }
  .icon {
    transition: 1s;
  }
  &:hover > .icon {
    fill: #ff7b9c;
  }
`;

const Header = () => {
  const token = useSelector(selectToken);
  return (
    <StyledContainer>
      <StyledLink to="/">
        <img
          src={`${process.env.PUBLIC_URL}/Logo-no-bg.svg`}
          alt="Nexus logo"
        ></img>
      </StyledLink>
      {token ? (
        <NavContainer>
          <StyledLink to="/dashboard">Dashboard</StyledLink>
          <StyledLink to="/messages">Messages</StyledLink>
          <StyledLink to="/collaboration">Collaboration</StyledLink>
          <StyledLink to="">Soon</StyledLink>

          <StyledLink to="/profile">
            Profile <BsPerson className="icon" size={24} color="#eaeaea" />
          </StyledLink>
          <StyledLink to="/logout">
            Logout
            <AiOutlineLogout className="icon" size={24} color="#eaeaea" />
          </StyledLink>
        </NavContainer>
      ) : (
        <StyledLink to="/login">
          Log in <BsPerson className="icon" size={24} color="#eaeaea" />
        </StyledLink>
      )}
    </StyledContainer>
  );
};

export default Header;
