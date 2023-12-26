import React, { useState } from "react";
import {
  DashboardLayout,
  WelcomeMessage,
  DashboardView,
  DashboardViewItem,
} from "./DashboardPage.styled";
import TaskWidget from "../../components/widgets/TaskWidget";
import FitnessTracker from "../../components/widgets/FitnessTracker";
import Recommendations from "../../components/widgets/Recommendations";
import EventPlanner from "../../components/widgets/EventPlanner";

const DashboardPage = () => {
  const [selectedWidget, setSelectedWidget] = useState(null);

  const handleWidgetClick = (widget) => {
    setSelectedWidget(widget);
  };

  const renderSelectedWidget = () => {
    switch (selectedWidget) {
      case "tasks":
        return <TaskWidget />;
      case "eventPlanning":
        return <EventPlanner />;
      case "fitnessTracker":
        return <FitnessTracker />;
      case "recommendations":
        return <Recommendations />;
      default:
        return <div></div>;
    }
  };

  return (
    <DashboardLayout>
      <WelcomeMessage>Welcome back, user</WelcomeMessage>
      <DashboardView>
        <DashboardViewItem onClick={() => handleWidgetClick("tasks")}>
          <h3>Tasks ✅</h3>
          <p>
            The Tasks Widget is your personal assistant for managing to-do lists
            and tasks efficiently. Organize your day, set priorities, and track
            your progress, all in one place. Stay on top of your
            responsibilities with a user-friendly interface that allows you to
            add, edit, and mark tasks as completed.
          </p>
        </DashboardViewItem>
        <DashboardViewItem onClick={() => handleWidgetClick("eventPlanning")}>
          <h3>Events 📅</h3>
          <p>
            The Event Planning Widget empowers you to seamlessly organize and
            coordinate events. Whether it's a team meeting, a social gathering,
            or a special celebration, this widget provides a centralized
            platform for creating, scheduling, and managing events. Collaborate
            with others, set reminders, and ensure every detail is covered for a
            successful event.
          </p>
        </DashboardViewItem>
        <DashboardViewItem onClick={() => handleWidgetClick("fitnessTracker")}>
          <h3>Fitness tracker 👟</h3>
          <p>
            The Fitness Tracker Widget is your personal fitness companion,
            helping you achieve your health and wellness goals. Log your
            workouts, track your progress, and stay motivated with a
            comprehensive overview of your fitness activities. Whether you're
            into cardio, strength training, or yoga, this widget adapts to your
            routine, providing insights to keep you on the path to a healthier
            lifestyle.
          </p>
        </DashboardViewItem>
        <DashboardViewItem onClick={() => handleWidgetClick("recommendations")}>
          <h3>Recommendations ⭐</h3>
          <p>
            The Recommendations Widget curates personalized suggestions tailored
            to your preferences and interests. Discover new books, movies,
            music, or any other content that aligns with your tastes. Powered by
            smart algorithms, this widget analyzes your activity and recommends
            content that you're likely to enjoy. Explore a world of
            possibilities and enrich your experience based on intelligent
            recommendations.
          </p>
        </DashboardViewItem>
      </DashboardView>
      <div>{renderSelectedWidget()}</div>
    </DashboardLayout>
  );
};

export default DashboardPage;
