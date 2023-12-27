import styled from "styled-components";
import { Link } from "react-router-dom";

export const GlobalContainer = styled.div`
  margin-bottom: 50px;
  padding: 60px 0;
  display: flex;
`;

export const StyledContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  background: #222020;
  padding: 30px 100px;

  p {
    width: 40%;
    margin: 0;
    font-size: 20px;
  }
`;

export const StyledLink = styled(Link)`
  color: #eaeaea;
  text-decoration: none;
  display: block;
  background: #ff7b9c;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  transition: 0.5s;
  margin-bottom: 20px;
  width: 150px;

  &:hover {
    background: #f04a73;
    color: #eaeaea;
    border-radius: 0;
    letter-spacing: 0.2em;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: fit-content;
  gap: 20px;
`;
