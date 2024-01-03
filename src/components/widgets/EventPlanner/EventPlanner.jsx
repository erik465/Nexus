import React from "react";
import { Container, Events, Heading, StyledLink } from "./EventPlanner.styled";

const EventPlanner = () => {
  return (
    <Container>
      <Heading>
        <h2>Your Events 🎉</h2>
        <StyledLink>See more</StyledLink>
      </Heading>
      <Events>You have no planned events.</Events>
    </Container>
  );
};

export default EventPlanner;
