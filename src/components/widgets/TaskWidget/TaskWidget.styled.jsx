import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #222224;
  color: #eaeaea;
  padding: 10px 20px;
  border-radius: 15px;
  overflow: hidden;
  min-height: 500px;
  max-height: 500px;
  overflow-y: auto;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 20px rgba(234, 128, 229, 0.574);
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: transparent;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #363636;
  }
`;

export const StyledHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #eaeaea;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
  }

  input,
  textarea {
    border: 1px solid #eaeaea;
    color: #eaeaea;
    background-color: transparent;
    padding: 5px;
    outline: none;
    border-radius: 10px;
    max-width: 100%;
  }

  textarea {
    min-height: 100px;
    max-height: 500px;
  }

  button {
    width: 40%;
    text-align: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: #eaeaea;
  text-decoration: underline;
  border: none;
  outline: none;
  margin: 10px;
  display: flex;
  justify-content: flex-start !important;
`;
