import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledLink,
  StyledButton,
  ErrorMessage,
} from "./Form.styled";
import { useDispatch } from "react-redux";
import { login } from "../../redux/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  /*  const [error, setErrors] = useState(["", ""]);*/

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
  };

  /* const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "username":
        setErrors((prevErrors) => {
          return { ...prevErrors, 0: value ? "" : "Username is required" };
        });
        break;
      case "password":
        setErrors((prevErrors) => {
          return { ...prevErrors, 1: value ? "" : "Password is required" };
        });
        break;
      default:
        break;
    }
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(formData));
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Log into Nexus</h2>

        <StyledLabel>
          Email*
          <StyledInput
            type="email"
            name="email"
            placeholder="Your email"
            onBlur={(e) => handleBlur(e)}
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
            onBlur={(e) => handleBlur(e)}
            required
          />
          <ErrorMessage></ErrorMessage>
        </StyledLabel>
        <StyledButton>Log in</StyledButton>

        <StyledLink to="/register">
          Don't have an account? Register now
        </StyledLink>
      </StyledForm>
    </div>
  );
};

export default LoginForm;
