import React from "react";

import { Container, Tracking } from "./FitnessTracker.styled";

const FitnessTracker = () => {
  return (
    <Container>
      <h2>Fitness Tracker</h2>
      <Tracking>
        <p>No Fitness goal set</p>
      </Tracking>
    </Container>
  );
};

export default FitnessTracker;
