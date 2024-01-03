import React from "react";
import CustomButton from "../../shared/CustomButton";
import { Container } from "./FitnessTracker.styled";
import { useSelector } from "react-redux";
import { selectUserFitnessGoal } from "../../../redux/selectors";
import FitnessGoal from "./FitnessGoal/FitnessGoal";

const FitnessTracker = () => {
  const fitnessGoal = useSelector(selectUserFitnessGoal);
  return (
    <Container>
      <h2>Fitness Tracker 🏋️‍♂️</h2>

      {fitnessGoal !== null ? (
        <FitnessGoal data={fitnessGoal} />
      ) : (
        <div style={{ width: 300 }}>
          <p>No Fitness goal set</p>
          <CustomButton>Create a goal</CustomButton>
        </div>
      )}
    </Container>
  );
};

export default FitnessTracker;
