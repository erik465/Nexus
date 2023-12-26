import React, { useState } from "react";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";

const Cont = styled.div`
  display: grid;
  grid-template-areas:
    "w  m"
    "wt m";
  gap: 20px;
`;

const Weight = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  grid-area: w;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid black;
    padding: 10px;
  }
`;

const WaterDiv = styled.div`
  grid-area: wt;
`;

const WaterChart = styled.div`
  border: 1px solid #32292f;
  padding: 5px 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-radius: 20px;
`;

const WaterQuantity = styled.div`
  height: 50px;
  background: #32292f;
  width: 50%;
  border-radius: 20px;
`;

const LeftValue = styled.p`
  color: #706c6c;
  margin: 5px 0;
`;

const StyledInput = styled.input`
  border: 1px solid #218380;
  border-radius: 7px;
  background: transparent;
  padding: 5px;
  margin-left: 10px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    display: none;
    outline: none;
  }
`;

const MeditationDiv = styled.div`
  grid-area: m;
`;

const Tracking = ({ goal }) => {
  const [addWater, setAddWater] = useState(false);
  return (
    <>
      <p style={{ fontSize: 24, textDecoration: "underline" }}>
        Your progress:
      </p>
      <Cont>
        <Weight>
          <i>Weight 🍽️:</i>
          <div>
            <span>
              <b>Your current weight:</b> {goal.currentWeight}kg
            </span>
            <span>
              <b>Your goal weight:</b> {goal.weightGoal}kg
            </span>
          </div>
          <p>
            <b>~ {Math.abs(goal.currentWeight - goal.weightGoal)}kg</b> left
            <br></br>
            <CustomButton text="Change weight"></CustomButton>
          </p>
        </Weight>
        <WaterDiv>
          <i>Daily water consumption 💧:</i>
          <WaterChart>
            <WaterQuantity></WaterQuantity>
            <p>1500mL</p>
          </WaterChart>
          <LeftValue>1000mL left</LeftValue>
          <div>
            <CustomButton
              text="Add water🥤"
              onClick={() => setAddWater(!addWater)}
            ></CustomButton>
            {addWater && (
              <StyledInput
                name="water"
                placeholder="Water in mL"
                type="number"
                min={1}
              />
            )}
          </div>
        </WaterDiv>
        <MeditationDiv>Meditation tracking</MeditationDiv>
      </Cont>
    </>
  );
};

export default Tracking;
