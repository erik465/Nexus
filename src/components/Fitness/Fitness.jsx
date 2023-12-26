import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";
import GoalSetup from "./GoalSetup";
import Tracking from "./Tracking";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
`;

const Fitness = () => {
  const [goal, setGoal] = useState({
    currentWeight: 42,
    weightGoal: 50,
    waterGoal: 2000,
    meditationGoal: 30,
  });
  const [goalSetup, setGoalSetup] = useState(false);

  return (
    <div>
      {goal === null ? (
        goalSetup ? (
          <GoalSetup setGoal={setGoal} />
        ) : (
          <Container>
            <b>Looks like you have no fitness goal. Maybe set one up</b>
            <CustomButton
              text={"Set up fitness goal"}
              onClick={() => setGoalSetup(true)}
            />
          </Container>
        )
      ) : (
        <Tracking goal={goal} />
      )}
    </div>
  );
};

export default Fitness;
