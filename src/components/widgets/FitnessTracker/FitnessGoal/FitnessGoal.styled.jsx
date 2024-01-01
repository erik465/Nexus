import styled from "styled-components";

function checkProgress(props) {
  if (props.percentage < 30) return "#eaeaea";
  else if (props.percentage < 65) return "#f2e753";
  else if (props.percentage < 100) return "#b5dd49";
  else if (props.percentage === 100) return "#41e528";
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 30px;
  padding-bottom: 50px;
`;

export const WeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #eaeaea;
  padding: 20px 50px;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 1px 1px 8px rgba(234, 128, 229, 0.574);

  div > h3 {
    margin: 10px;
    margin-left: 0;
  }
  div > p {
    margin: 0;
    font-size: 32px;
  }
`;

export const WeightChart = styled.div`
  width: 100%;
  border: 1px solid ${(props) => checkProgress(props)};
  padding: 5px;
  border-radius: 15px;

  div {
    background: ${(props) => checkProgress(props)};
    height: 20px;
    border-radius: 15px;
    width: ${(props) => props.percentage}%;
  }
`;

export const LeftContainer = styled.div`
  p {
    font-size: 16px !important;
    margin-bottom: 10px !important;
  }
  button {
    width: 110px;
  }
`;

export const MeditationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #eaeaea;
  padding: 20px 50px;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 1px 1px 8px rgba(234, 128, 229, 0.574);
`;

export const HydrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  color: #eaeaea;
  padding: 20px 50px;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 1px 1px 8px rgba(234, 128, 229, 0.574);

  p {
    font-size: 20px;
    margin: 0;
  }

  div {
    display: flex;
    gap: 15px;
  }

  input {
    border: 1px solid #eaeaea;
    background: transparent;
    border-radius: 10px;
    padding: 4px;
  }
`;
