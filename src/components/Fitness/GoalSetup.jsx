import React, { useState } from "react";
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

const GoalSetup = ({ setGoal }) => {
  const [formData, setFormData] = useState({});
  const submitGoal = (e) => {
    e.preventDefault();
    setGoal(formData);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <StyledForm onSubmit={(e) => submitGoal(e)}>
      <label>Your weight*</label>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <StyledInput
          name="currentWeight"
          placeholder="Your current weight"
          type="number"
          min={30}
          onChange={(e) => handleChange(e)}
          required
        />
        <StyledInput
          name="weightGoal"
          placeholder="Your weight goal"
          type="number"
          min={30}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>

      <p>------------</p>
      <label>Weekly workout goal*</label>
      <StyledInput
        name="workoutGoal"
        placeholder="1 - 7"
        type="number"
        min={1}
        max={7}
        onChange={(e) => handleChange(e)}
        required
      />
      <p>------------</p>
      <label>Daily water goal*</label>
      <StyledInput
        name="waterGoal"
        placeholder="Water goal in mL"
        type="number"
        min={1}
        onChange={(e) => handleChange(e)}
        required
      />
      <p>------------</p>
      <label>Daily meditation goal*</label>
      <StyledInput
        name="meditationGoal"
        placeholder="Meditation goal in min"
        type="number"
        min={1}
        onChange={(e) => handleChange(e)}
        required
      />
      <p>------------</p>
      <CustomButton text="Done" />
    </StyledForm>
  );
};

export default GoalSetup;
