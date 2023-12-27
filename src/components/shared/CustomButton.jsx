import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #ff7b9c;
  color: #eaeaea;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 5px 10px;
  transition: 0.7s;

  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #f04a73;
  }
`;

const CustomButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CustomButton;
