import React from "react";
import CustomButton from "../../shared/CustomButton";
import { Container, Tracking } from "./FitnessTracker.styled";

const FitnessTracker = () => {
  return (
    <Container>
      <h2>Fitness Tracker 🏋️‍♂️</h2>
      <Tracking>
        <p>No Fitness goal set</p>
        <CustomButton>Create a goal</CustomButton>
      </Tracking>
    </Container>
  );
};

export default FitnessTracker;
