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
        <>
          <p>No Fitness goal set</p>
          <CustomButton>Create a goal</CustomButton>
        </>
      )}
    </Container>
  );
};

export default FitnessTracker;
