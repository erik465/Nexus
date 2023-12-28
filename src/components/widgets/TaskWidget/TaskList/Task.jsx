import React from "react";
import styled from "styled-components";
import { FaCheck, FaCircle } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { toggleCompletedTask, getTasks } from "../../../../redux/operations";

const StyledTask = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  text-decoration: ${(props) => (props.$done ? " line-through" : "none")};

  h3 {
    font-weight: normal;
  }

  p {
    width: 70%;
  }
`;

const Status = styled.div``;

const Task = ({ title, description, done, id }) => {
  const dispatch = useDispatch();

  const onToggle = async () => {
    await dispatch(toggleCompletedTask(id));
    await dispatch(getTasks());
  };

  return (
    <StyledTask $done={done}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Status
        onClick={onToggle}
        style={{ cursor: "pointer", marginRight: "8px" }}
      >
        {done ? (
          <FaCheck size={20} color="#2ecc71" />
        ) : (
          <FaCircle size={20} color="#95a5a6" />
        )}
      </Status>
    </StyledTask>
  );
};

export default Task;
