import React from "react";
import styled from "styled-components";
import Task from "../Task";
import { AiOutlinePlus } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaskList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AddTask = styled.button`
  border: none;
  outline: none;
  background: transparent;
  font-weight: bold;
  width: 10%;
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TaskWidget = () => {
  return (
    <Container>
      <h2>Your Tasks</h2>
      <TaskList>
        <Task
          title="example task"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem magna, pharetra volutpat congue ut, posuere quis orci. Curabitur vitae nunc mi. Phasellus vitae nunc et urna convallis dignissim in."
          done={false}
          createdAt="26-12-2023"
        />
        <Task
          title="example task"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem magna, pharetra volutpat congue ut, posuere quis orci. Curabitur vitae nunc mi. Phasellus vitae nunc et urna convallis dignissim in."
          done={true}
          createdAt="26-12-2023"
        />
        <Task
          title="example task"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem magna, pharetra volutpat congue ut, posuere quis orci. Curabitur vitae nunc mi. Phasellus vitae nunc et urna convallis dignissim in."
          done={false}
          createdAt="26-12-2023"
        />
        <Task
          title="example task"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lorem magna, pharetra volutpat congue ut, posuere quis orci. Curabitur vitae nunc mi. Phasellus vitae nunc et urna convallis dignissim in."
          done={false}
          createdAt="26-12-2023"
        />
        <AddTask>
          Add task <AiOutlinePlus />
        </AddTask>
      </TaskList>
    </Container>
  );
};

export default TaskWidget;
