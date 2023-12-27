import React from "react";
import Task from "./Task";

const TaskList = () => {
  return (
    <ol>
      <Task
        title="Example Task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare justo purus, vitae semper quam dignissim quis. Nunc et sodales elit. Curabitur molestie justo metus, vitae feugiat mauris fringilla at. Nulla maximus sapien ac ipsum molestie, non venenatis lacus porttitor. Quisque eu nisi et mauris posuere condimentum."
        done={false}
      />
      <Task
        title="Example Task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare justo purus, vitae semper quam dignissim quis. Nunc et sodales elit. Curabitur molestie justo metus, vitae feugiat mauris fringilla at. Nulla maximus sapien ac ipsum molestie, non venenatis lacus porttitor. Quisque eu nisi et mauris posuere condimentum."
        done={false}
      />
      <Task
        title="Example Task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare justo purus, vitae semper quam dignissim quis. Nunc et sodales elit. Curabitur molestie justo metus, vitae feugiat mauris fringilla at. Nulla maximus sapien ac ipsum molestie, non venenatis lacus porttitor. Quisque eu nisi et mauris posuere condimentum."
        done={true}
      />
      <Task
        title="Example Task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare justo purus, vitae semper quam dignissim quis. Nunc et sodales elit. Curabitur molestie justo metus, vitae feugiat mauris fringilla at. Nulla maximus sapien ac ipsum molestie, non venenatis lacus porttitor. Quisque eu nisi et mauris posuere condimentum."
        done={false}
      />
      <Task
        title="Example Task"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare justo purus, vitae semper quam dignissim quis. Nunc et sodales elit. Curabitur molestie justo metus, vitae feugiat mauris fringilla at. Nulla maximus sapien ac ipsum molestie, non venenatis lacus porttitor. Quisque eu nisi et mauris posuere condimentum."
        done={true}
      />
    </ol>
  );
};

export default TaskList;
