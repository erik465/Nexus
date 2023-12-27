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
