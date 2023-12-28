import React from "react";
import { Container, Events } from "./EventPlanner.styled";

const EventPlanner = () => {
  return (
    <Container>
      <h2>Your Events 🎉</h2>
      <Events>You have no planned events.</Events>
    </Container>
  );
};

export default EventPlanner;
