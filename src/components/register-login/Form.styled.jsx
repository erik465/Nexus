import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 40px 30px;
  width: 30%;
  font-size: 30px;
  background: #222020;
  min-height: 500px;
  border-radius: 20px;

  h2 {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 70%;
  margin-bottom: 30px;
`;

export const StyledInput = styled.input`
  border: 1px solid #eaeaea;
  outline: none;
  padding: 10px;
  font-size: 20px;
  border-radius: 15px;
  background-color: transparent;
  color: #eaeaea;

  &::placeholder {
    color: grey;
  }
`;

export const StyledButton = styled.button`
  font-size: 20px;
  background: #ff7b9c;
  border-radius: 15px;
  padding: 10px;
  color: #eaeaea;
  border: none;
  width: 70%;
  margin-bottom: 10px;
  margin-top: 20px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    background: #eaeaea;
    color: #ff7b9c;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #eaeaea;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    color: #ff7b9c;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  font-size: 14px;
`;

export const FitnessLink = styled.p`
  margin: 0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;
