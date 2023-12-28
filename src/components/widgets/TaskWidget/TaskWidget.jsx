import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, getTasks } from "../../../redux/operations";
import TaskList from "./TaskList/TaskList";
import {
  Container,
  StyledHeading,
  StyledLink,
  ModalForm,
  CancelButton,
} from "./TaskWidget.styled";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-modal";

import CustomButton from "../../shared/CustomButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#363636",
    color: "#eaeaea",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.763)",
  },
};
Modal.setAppElement("#root");

const TaskWidget = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    const taskData = { title: title.value, description: description.value };
    await dispatch(addTask(taskData));
    await dispatch(getTasks());
    closeModal();
  };

  return (
    <Container>
      <StyledHeading>
        <h2>Your Tasks 📝</h2>
        <StyledLink>See more</StyledLink>
      </StyledHeading>
      <TaskList />
      <CustomButton onClick={openModal}>
        Add task <AiOutlinePlus />
      </CustomButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalForm onSubmit={handleSubmit}>
          <h2>Add a task🎯</h2>

          <label>
            Title:
            <input name="title" type="text" required />
          </label>
          <label>
            Description:
            <textarea name="description" required />
          </label>
          <CustomButton>Register Task</CustomButton>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
        </ModalForm>
      </Modal>
    </Container>
  );
};

export default TaskWidget;
