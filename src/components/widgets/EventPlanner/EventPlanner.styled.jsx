import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  background-color: #222224;
  color: #eaeaea;
  padding: 10px 20px;
  border-radius: 15px;
  transition: 0.5s;

  &:hover {
    box-shadow: 0 0 20px rgba(234, 128, 229, 0.574);
  }
`;

export const Events = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
