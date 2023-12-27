import React from "react";
import TaskList from "./TaskList/TaskList";
import { Container, StyledHeading, StyledLink } from "./TaskWidget.styled";
import { AiOutlinePlus } from "react-icons/ai";

import CustomButton from "../../shared/CustomButton";

const TaskWidget = () => {
  return (
    <Container>
      <StyledHeading>
        <h2>Your Tasks</h2>
        <StyledLink>See more</StyledLink>
      </StyledHeading>
      <TaskList />
      <CustomButton>
        Add task <AiOutlinePlus />
      </CustomButton>
    </Container>
  );
};

export default TaskWidget;
