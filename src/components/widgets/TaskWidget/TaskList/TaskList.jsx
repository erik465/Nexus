import React, { useEffect } from "react";
import Task from "./Task";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectTasks } from "../../../../redux/selectors";
import { getTasks } from "../../../../redux/operations";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <ol>
      {tasks ? (
        tasks.map((task) => {
          return (
            <Task
              title={task.title}
              description={task.description}
              done={task.completed}
              id={task._id}
              key={task._id}
            />
          );
        })
      ) : (
        <p>You have no tasks</p>
      )}
    </ol>
  );
};

export default TaskList;
