import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #087e8b;
  color: #eaeaea;
  border-radius: 10px;
  outline: none;
  border: none;
  padding: 5px 10px;
  transition: 0.7s;

  &:hover {
    background-color: #0a4a48;
  }
`;

const CustomButton = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default CustomButton;
