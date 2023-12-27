import React from "react";
import {
  DashboardLayout,
  WelcomeMessage,
  DashboardView,
} from "./DashboardPage.styled";
import TaskWidget from "../../components/widgets/TaskWidget/TaskWidget";
import EventPlanner from "../../components/widgets/EventPlanner/EventPlanner";
import FitnessTracker from "../../components/widgets/FitnessTracker/FitnessTracker";
import Recommendations from "../../components/widgets/Recommendations/Recommendations";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <WelcomeMessage>Welcome back, user</WelcomeMessage>
      <DashboardView>
        <TaskWidget />
        <EventPlanner />
        <FitnessTracker />
        <Recommendations />
      </DashboardView>
    </DashboardLayout>
  );
};

export default DashboardPage;
