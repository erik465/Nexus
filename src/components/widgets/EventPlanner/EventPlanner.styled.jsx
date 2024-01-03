import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: #222224;
  color: #eaeaea;
  padding: 10px 20px;
  border-radius: 15px;
  transition: 0.5s;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  color: #eaeaea;
`;
