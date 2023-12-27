import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  GlobalContainer,
  StyledContainer,
  StyledLink,
  StyledBox,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <GlobalContainer>
      <StyledContainer>
        <TypeAnimation
          sequence={[
            "Welcome to Nexus, a place fo people to CONNECT.",
            1000,
            "Welcome to Nexus, a place fo people to SHARE.",
            1000,
            "Welcome to Nexus, a place fo people to ACHIEVE.",
            1000,
            "Welcome to Nexus, a place fo people to COLLABORATE.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "4em",
            display: "block",
          }}
          repeat={Infinity}
        />
        <h1>Haven't joined yet?</h1>
        <StyledBox>
          <StyledLink to="/login">LOG IN</StyledLink>
          <StyledLink to="/register">REGISTER</StyledLink>
        </StyledBox>
        <p>
          Embark on a journey of connection and collaboration like never before.
          Nexus is not just a platform; it's a digital space where individuals
          converge, ideas flourish, and networks expand. Whether you're here to
          share, create, or connect, Nexus is the nexus of your online
          experience.
        </p>
      </StyledContainer>
    </GlobalContainer>
  );
};

export default WelcomePage;
