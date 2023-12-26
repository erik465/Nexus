import React from "react";
import styled from "styled-components";
import Fitness from "../Fitness/Fitness";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const FitnessTracker = () => {
  return (
    <Container>
      <h2>Fitness Tracker</h2>
      <Fitness />
    </Container>
  );
};

export default FitnessTracker;
