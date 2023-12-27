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
