import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";
import GoalSetup from "./GoalSetup";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px;
`;
const Tracking = styled.div``;

const Fitness = () => {
  const [goal, setGoal] = useState(null);
  const [goalSetup, setGoalSetup] = useState(false);

  return (
    <div>
      {goal === null ? (
        goalSetup ? (
          <GoalSetup />
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
        <Tracking>
          <p>Your progress:</p>
        </Tracking>
      )}
    </div>
  );
};

export default Fitness;
