import React, { useState } from "react";
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledLink,
  StyledButton,
  ErrorMessage,
} from "./Form.styled";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "../../redux/selectors";
import { login } from "../../redux/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setErrors] = useState(["", ""]);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.entries(formData).forEach(([fieldName, value]) => {
      validateField(fieldName, value);
    });

    const hasErrors = Object.values(error).some((error) => error !== "");
    if (!hasErrors) {
      await dispatch(login(formData));
    }
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
          />
          <ErrorMessage>{error[0]}</ErrorMessage>
        </StyledLabel>
        <StyledLabel>
          Password*
          <StyledInput
            type="password"
            name="password"
            placeholder="Your password"
            onBlur={(e) => handleBlur(e)}
          />
          <ErrorMessage>{error[1]}</ErrorMessage>
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
