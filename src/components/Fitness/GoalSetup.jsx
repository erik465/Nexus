import React from "react";
import styled from "styled-components";
import CustomButton from "../shared/CustomButton";

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 10px;
`;

const StyledInput = styled.input`
  border: 1px solid #218380;
  border-radius: 7px;
  background: transparent;
  padding: 5px;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    margin: 0;
    display: none;
    outline: none;
  }
`;

const GoalSetup = () => {
  return (
    <StyledForm>
      <label>Your weight*</label>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <StyledInput placeholder="Your current weight" type="number" min={30} />
        <StyledInput placeholder="Your weight goal" type="number" min={30} />
      </div>

      <p>------------</p>
      <label>Weekly workout goal*</label>
      <StyledInput placeholder="1 - 7" type="number" min={1} max={7} />
      <p>------------</p>
      <label>Daily water goal*</label>
      <StyledInput placeholder="Water goal in mL" type="number" min={1} />
      <p>------------</p>
      <label>Daily meditation goal*</label>
      <StyledInput placeholder="Meditation goal in min" type="number" min={1} />
      <p>------------</p>
      <CustomButton text="Done" />
    </StyledForm>
  );
};

export default GoalSetup;
