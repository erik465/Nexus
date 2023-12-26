import React from "react";
import styled from "styled-components";
import CustomButton from "./shared/CustomButton";

const Cont = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Title = styled.b`
  text-decoration: ${(props) => (props.$done ? " line-through" : "underline")};
`;
const Desc = styled.p`
  width: 80%;
  text-decoration: ${(props) => (props.$done ? " line-through" : "none")};
`;

const Status = styled.p`
  color: ${(props) => (props.$done ? "green" : "red")};
`;

const Task = ({ title, desc, createdAt, done }) => {
  return (
    <Cont>
      <div>
        <Title $done={done}>
          {title.toUpperCase()} ({createdAt})
        </Title>
        <Desc $done={done}>{desc}</Desc>
      </div>
      <Status $done={done}>{done ? "Done" : "Undone"}</Status>
      <CustomButton text={"Remove"}></CustomButton>
    </Cont>
  );
};

export default Task;
