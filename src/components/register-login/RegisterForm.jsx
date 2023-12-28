import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
  ErrorMessage,
  FitnessLink,
} from "./Form.styled";
import { useDispatch } from "react-redux";
import { register } from "../../redux/operations";

const RegisterForm = () => {
  const [showFitness, setShowFitness] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      email,
      currentWeight,
      weightGoal,
      waterGoal,
      meditationGoal,
    } = event.target;

    let newUser = {};

    if (!currentWeight || !weightGoal || !waterGoal || !meditationGoal) {
      newUser = {
        username: username.value,
        password: password.value,
        email: email.value,
        fitnessGoal: null,
      };
    } else {
      newUser = {
        username: username.value,
        password: password.value,
        email: email.value,
        fitnessGoal: {
          currentWeight: currentWeight.value,
          weightGoal: weightGoal.value,
          waterGoal: waterGoal.value,
          meditationGoal: meditationGoal.value,
        },
      };
    }

    dispatch(register(newUser));
  };
  return (
    <div>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <h2>Create a new account in Nexus</h2>

        <StyledLabel>
          Username*
          <StyledInput
            type="text"
            name="username"
            placeholder="Your new username"
            required
          />
          <ErrorMessage></ErrorMessage>
        </StyledLabel>
        <StyledLabel>
          Email*
          <StyledInput
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
          <ErrorMessage></ErrorMessage>
        </StyledLabel>
        <StyledLabel>
          Password*
          <StyledInput
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <ErrorMessage></ErrorMessage>
        </StyledLabel>
        {showFitness || (
          <FitnessLink
            onClick={() => setShowFitness(true)}
            title="Set up you fitness goal to be tracked on your dashboard"
          >
            Set up a Fitness Goal?
          </FitnessLink>
        )}

        {showFitness && (
          <>
            <StyledLabel>
              Current weight
              <StyledInput
                type="number"
                name="currentWeight"
                placeholder="Your current weight"
                min={30}
                max={450}
                required
              />
              <ErrorMessage></ErrorMessage>
            </StyledLabel>
            <StyledLabel>
              Goal weight
              <StyledInput
                type="number"
                name="weightGoal"
                placeholder="Your goal weight"
                min={30}
                max={450}
                required
              />
              <ErrorMessage></ErrorMessage>
            </StyledLabel>
            <StyledLabel>
              Hydration goal
              <StyledInput
                type="number"
                name="waterGoal"
                placeholder="Water mL per day"
                min={1}
                required
              />
              <ErrorMessage></ErrorMessage>
            </StyledLabel>
            <StyledLabel>
              Daily meditation goal
              <StyledInput
                type="number"
                name="meditationGoal"
                placeholder="Meditation in mins"
                min={1}
                required
              />
              <ErrorMessage></ErrorMessage>
            </StyledLabel>
          </>
        )}
        <StyledButton>Register</StyledButton>
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
