import styled from "styled-components";

export const DashboardLayout = styled.div`
  padding: 0 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 50px;
`;

export const WelcomeMessage = styled.h2`
  font-size: 25px;
  font-weight: 500;
`;

export const DashboardView = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const DashboardViewItem = styled.div`
  border: 1px solid #32292f;
  border-radius: 15px;
  padding: 10px 25px;
  transition: 1s;

  p {
    width: 70%;
  }

  &:hover {
    background-color: #32292f;
    color: #eaeaea;
  }
`;
