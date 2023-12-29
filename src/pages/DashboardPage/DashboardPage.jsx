import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
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
  const user = useSelector(selectUser);
  return (
    <DashboardLayout>
      <h1>Personal Dashboard</h1>
      <WelcomeMessage>Welcome back, {user ? user.username : ""}</WelcomeMessage>
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
